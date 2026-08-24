import { createPortal } from "react-dom"
import { useEffect, useRef, useState, type ReactNode } from "react"

const DESIGN_WIDTH = 1920
const DESIGN_HEIGHT = 1080

interface DesktopPreviewProps {
  children: ReactNode
  className?: string
}

/**
 * Copies the parent's styles into the iframe document.
 *
 * This allows Tailwind, shadcn/ui, CSS variables,
 * global styles, etc. to work inside the iframe.
 */
async function syncDocumentStyles(frameDocument: Document): Promise<void> {
  const parentRoot = document.documentElement
  const frameRoot = frameDocument.documentElement

  // Keep theme classes in sync.
  if (frameRoot.className !== parentRoot.className) {
    frameRoot.className = parentRoot.className
  }

  // Keep CSS variables/styles defined on <html> in sync.
  if (frameRoot.style.cssText !== parentRoot.style.cssText) {
    frameRoot.style.cssText = parentRoot.style.cssText
  }

  const existingNodes = Array.from(
    frameDocument.head.querySelectorAll("[data-preview-style]")
  )

  const existingMap = new Map(
    existingNodes.map((node) => [
      node.textContent || (node as HTMLLinkElement).href,
      node,
    ])
  )

  const styles = document.head.querySelectorAll("style, link[rel='stylesheet']")

  const seenKeys = new Set<string>()
  const loadPromises: Promise<void>[] = []

  styles.forEach((node) => {
    const key = node.textContent || (node as HTMLLinkElement).href

    seenKeys.add(key)

    if (!existingMap.has(key)) {
      const clone = node.cloneNode(true) as HTMLElement

      clone.setAttribute("data-preview-style", "true")

      // Wait for external stylesheets to load.
      if (clone.tagName === "LINK") {
        loadPromises.push(
          new Promise((resolve) => {
            clone.addEventListener("load", () => resolve(), { once: true })

            clone.addEventListener("error", () => resolve(), { once: true })
          })
        )
      }

      frameDocument.head.appendChild(clone)
    }
  })

  // Remove styles that no longer exist in the parent.
  existingMap.forEach((node, key) => {
    if (!seenKeys.has(key)) {
      node.remove()
    }
  })

  await Promise.all(loadPromises)
}

export default function DesktopPreview({
  children,
  className,
}: DesktopPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const iframeRef = useRef<HTMLIFrameElement>(null)

  const [scale, setScale] = useState(1)
  const [mountNode, setMountNode] = useState<HTMLDivElement | null>(null)

  /*
   * Calculate how much the 2560px canvas
   * should be scaled down to fit the editor.
   */
  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const updateScale = () => {
      const availableWidth = container.clientWidth

      const nextScale = availableWidth / DESIGN_WIDTH

      setScale(Math.min(nextScale, 1))
    }

    updateScale()

    const observer = new ResizeObserver(updateScale)

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  /*
   * Create the iframe document and mount
   * the React preview into it.
   */
  useEffect(() => {
    const iframe = iframeRef.current

    if (!iframe) {
      return
    }

    let disposed = false

    const handleLoad = async () => {
      const frameDocument = iframe.contentDocument

      if (!frameDocument || disposed) {
        return
      }

      /*
       * Copy Tailwind/shadcn/global styles
       * into the iframe.
       */
      await syncDocumentStyles(frameDocument)

      if (disposed) {
        return
      }

      const root = frameDocument.getElementById(
        "preview-root"
      ) as HTMLDivElement | null

      if (!root) {
        return
      }

      setMountNode(root)
    }

    iframe.addEventListener("load", handleLoad)

    /*
     * The iframe gets its own document.
     * The viewport is ALWAYS: 2560 × 1440
     *
     * Scaling happens outside the iframe
     * using CSS transform.
     */
    iframe.srcdoc = `
      <!doctype html>
      <html>
        <head>
          <meta charset="UTF-8" />

          <meta
            name="viewport"
            content="width=${DESIGN_WIDTH}, height=${DESIGN_HEIGHT}"
          />

          <style>
            html,
            body,
            #preview-root {
              margin: 0;
              padding: 0;

              width: ${DESIGN_WIDTH}px;
              height: ${DESIGN_HEIGHT}px;
            }

            html,
            body {
              overflow: hidden;
            }

            body {
              background: transparent;
            }
          </style>
        </head>

        <body>
          <div id="preview-root"></div>
        </body>
      </html>
    `

    return () => {
      disposed = true

      iframe.removeEventListener("load", handleLoad)

      setMountNode(null)
    }
  }, [])

  /*
   * Keep the iframe's styles synchronized with the parent application.
   *
   * This is particularly useful with:
   * - Tailwind, shadcn/ui, dark mode, CSS variables, Vite HMR
   */
  useEffect(() => {
    const iframe = iframeRef.current

    const frameDocument = iframe?.contentDocument

    if (!frameDocument) {
      return
    }

    // Initial sync.
    syncDocumentStyles(frameDocument)

    /*
     * Watch <html class="" style="">
     * This keeps dark/light mode and CSS variables synchronized.
     */
    const rootObserver = new MutationObserver(() => {
      syncDocumentStyles(frameDocument)
    })

    rootObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })

    /*
     * Watch <head>.
     * To catches: Tailwind style changes, Vite HMR, dynamically inserted styles, stylesheet changes
     */
    const headObserver = new MutationObserver(() => {
      syncDocumentStyles(frameDocument)
    })

    headObserver.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    })

    return () => {
      rootObserver.disconnect()
      headObserver.disconnect()
    }
  }, [mountNode])

  const previewWidth = DESIGN_WIDTH * scale

  const previewHeight = DESIGN_HEIGHT * scale

  return (
    <div ref={containerRef} className={`w-full ${className ?? ""}`}>
      {/*
        This is the VISIBLE size.
        ex: 2560 × 1440 -> scale 0.5 -> 1280 × 720
      */}
      <div
        className="relative mx-auto overflow-hidden rounded-xl border shadow-2xl"
        style={{
          width: previewWidth,
          height: previewHeight,
        }}
      >
        {/*
          The iframe itself is ALWAYS: 2560 × 1440
          Only the iframe's visual representation is scaled.
        */}
        <iframe
          ref={iframeRef}
          title="Desktop preview"
          className="absolute top-0 left-0 block border-0"
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,

            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
          sandbox="allow-scripts allow-same-origin"
        />

        {mountNode ? createPortal(children, mountNode) : null}
      </div>

      <div className="mt-3 text-center text-xs text-muted-foreground">
        Desktop preview · {DESIGN_WIDTH} × {DESIGN_HEIGHT}
      </div>
    </div>
  )
}
