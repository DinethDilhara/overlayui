import { useState } from "react"
import { Link } from "react-router"
import { ArrowLeft, ArrowRight, Copy, Check, Share } from "lucide-react"
import { getAdjacentComponents } from "@/config/components"
import { useSound } from "@/hooks/use-sound"
import { clickSoftSound } from "@/lib/click-soft"
import { copyToClipboard } from "@/utils/copy"
import { cn } from "@/utils/utils"

export interface ComponentDocBarProps {
  slug: string
  className?: string
}

export function ComponentDocBar({ slug, className }: ComponentDocBarProps) {
  const { prev, next } = getAdjacentComponents(slug)
  const [copied, setCopied] = useState(false)

  const [playClick] = useSound(clickSoftSound, {
    volume: 0.3,
  })

  const handleCopy = async () => {
    playClick()
    await copyToClipboard(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async () => {
    playClick()
    if (navigator.share) {
      try {
        await navigator.share({
          title: `OverlayUI - ${slug}`,
          url: window.location.href,
        })
        return
      } catch {
        // Fallback to clipboard copy if share is cancelled or fails
      }
    }
    await handleCopy()
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between py-2 mb-6 border-b border-border/40",
        className
      )}
    >
      {/* Left: Back to Components */}
      <Link
        to="/docs/components"
        className="group/button inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4 transition-transform group-hover/button:-translate-x-0.5" />
        <span>Components</span>
      </Link>

      {/* Right: Actions (Copy Page, Share, Prev, Next) */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Copy Page Button */}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied to clipboard" : "Copy page URL"}
          className="inline-flex h-7 items-center gap-1.5 rounded-lg border border-border/50 bg-secondary px-2.5 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-2xs cursor-pointer active:scale-95"
        >
          {copied ? (
            <Check className="size-3.5 text-emerald-500 animate-in zoom-in-50 duration-150" />
          ) : (
            <Copy className="size-3.5" />
          )}
          <span className="hidden min-[400px]:inline">
            {copied ? "Copied" : "Copy page"}
          </span>
        </button>

        {/* Share Button */}
        <button
          type="button"
          onClick={handleShare}
          aria-label="Share component"
          className="inline-flex size-7 items-center justify-center rounded-lg border border-border/50 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-2xs cursor-pointer active:scale-95"
        >
          <Share className="size-3.5" />
        </button>

        {/* Prev Component Button */}
        {prev ? (
          <Link
            to={prev.href}
            onClick={() => playClick()}
            aria-label={`Previous component: ${prev.title}`}
            title={`Previous: ${prev.title}`}
            className="inline-flex size-7 items-center justify-center rounded-lg border border-border/50 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-2xs active:scale-95"
          >
            <ArrowLeft className="size-3.5" />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex size-7 items-center justify-center rounded-lg border border-border/20 bg-secondary/40 text-muted-foreground/30 cursor-not-allowed"
          >
            <ArrowLeft className="size-3.5" />
          </span>
        )}

        {/* Next Component Button */}
        {next ? (
          <Link
            to={next.href}
            onClick={() => playClick()}
            aria-label={`Next component: ${next.title}`}
            title={`Next: ${next.title}`}
            className="inline-flex size-7 items-center justify-center rounded-lg border border-border/50 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-2xs active:scale-95"
          >
            <ArrowRight className="size-3.5" />
          </Link>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex size-7 items-center justify-center rounded-lg border border-border/20 bg-secondary/40 text-muted-foreground/30 cursor-not-allowed"
          >
            <ArrowRight className="size-3.5" />
          </span>
        )}
      </div>
    </div>
  )
}
