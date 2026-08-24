import * as React from "react"
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { Link, useLocation } from "react-router"
import { motion, AnimatePresence } from "motion/react"
import { ChevronRight, BookOpen, Layers, Sparkles } from "lucide-react"
import { cn } from "@/utils/utils"
import { COMPONENTS_REGISTRY } from "@/config/components"
import { useSound } from "@/hooks/use-sound"
import { uMiniMapOpenSound } from "@/lib/u-mini-map-open"
import { clickSoftSound } from "@/lib/click-soft"

const MotionChevron = motion.create(ChevronRight)

// ─── Sound Context with Scroll & Rate Limiting ─────────────────────────────────

const SidebarSoundContext = createContext<{
  playHoverThrottled: () => void
  playClick: () => void
  onScroll: () => void
}>({
  playHoverThrottled: () => {},
  playClick: () => {},
  onScroll: () => {},
})

function SidebarSoundProvider({ children }: { children: React.ReactNode }) {
  const lastHoverTime = useRef(0)
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<number | null>(null)

  const [playHoverSound] = useSound(uMiniMapOpenSound, {
    volume: 0.15,
  })
  const [playClickSound] = useSound(clickSoftSound, {
    volume: 0.25,
  })

  const onScroll = useCallback(() => {
    isScrolling.current = true
    if (scrollTimeout.current !== null) {
      clearTimeout(scrollTimeout.current)
    }
    scrollTimeout.current = window.setTimeout(() => {
      isScrolling.current = false
    }, 180)
  }, [])

  const playHoverThrottled = useCallback(() => {
    if (isScrolling.current) return
    const now = performance.now()
    // Rate limit hover sound to once every 160ms
    if (now - lastHoverTime.current < 160) return
    lastHoverTime.current = now
    playHoverSound()
  }, [playHoverSound])

  const playClick = useCallback(() => {
    playClickSound()
  }, [playClickSound])

  return (
    <SidebarSoundContext.Provider value={{ playHoverThrottled, playClick, onScroll }}>
      {children}
    </SidebarSoundContext.Provider>
  )
}

// ─── Scroll to active ─────────────────────────────────────────────────────────

function useScrollToActive(active: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  const scrolled = useRef(false)

  useEffect(() => {
    if (!active || scrolled.current || !ref.current) return
    scrolled.current = true
    const el = ref.current
    const schedule =
      typeof requestIdleCallback !== "undefined"
        ? (cb: () => void) => requestIdleCallback(cb)
        : (cb: () => void) => setTimeout(cb, 100)
    const cancel =
      typeof cancelIdleCallback !== "undefined"
        ? cancelIdleCallback
        : clearTimeout
    const id = schedule(() => {
      const viewport = el.closest("[data-scroll-viewport]")
      if (!(viewport instanceof HTMLElement)) return
      const vpRect = viewport.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      const offset =
        elRect.top - vpRect.top - vpRect.height / 2 + elRect.height / 2
      if (Math.abs(offset) > 40)
        viewport.scrollBy({ top: offset, behavior: "smooth" })
    })
    return () => cancel(id as number)
  }, [active])

  useEffect(() => {
    if (!active) scrolled.current = false
  }, [active])

  return ref
}

// ─── Sidebar001Item ───────────────────────────────────────────────────────────

export interface Sidebar001ItemProps {
  href: string
  label: React.ReactNode
  isActive: boolean
  isNew?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export const Sidebar001Item = memo(function Sidebar001Item({
  href,
  label,
  isActive,
  isNew,
  className,
  onClick,
}: Sidebar001ItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const itemRef = useScrollToActive(isActive)
  const { playHoverThrottled, playClick } = useContext(SidebarSoundContext)

  const x = isActive ? 8 : isHovered ? 6 : 0

  return (
    <div className="relative">
      {isActive && (
        <motion.span
          layoutId="sb001-active-bar"
          className="pointer-events-none absolute z-10 left-[4px] top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-primary"
          animate={{ width: 23 }}
          transition={{ type: "spring", stiffness: 800, damping: 40 }}
        />
      )}

      <motion.span
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-px bg-foreground/40"
        animate={{ width: isActive ? 0 : isHovered ? 26 : 18 }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />
      <motion.span className="pointer-events-none absolute w-[13px] left-0 top-1/4 h-px bg-foreground/20" />
      <motion.span className="pointer-events-none absolute w-[16px] left-0 top-0 h-px bg-foreground/20" />
      <motion.span className="pointer-events-none absolute w-[13px] left-0 top-3/4 h-px bg-foreground/20" />

      <motion.div
        ref={itemRef}
        animate={{ x }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{ transformOrigin: "left center" }}
      >
        <Link
          to={href}
          onClick={(e) => {
            playClick()
            onClick?.(e)
          }}
          onMouseEnter={() => {
            playHoverThrottled()
            setIsHovered(true)
          }}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "relative flex items-center gap-2 ml-2 pl-4 py-1.5 text-sm select-none transition-colors",
            isActive
              ? "font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground",
            className
          )}
        >
          <span className="relative z-1 truncate">{label}</span>
          {isNew && (
            <span className="size-1.5 rounded-full bg-primary shrink-0" />
          )}
        </Link>
      </motion.div>
    </div>
  )
})

// ─── Sidebar001Separator ──────────────────────────────────────────────────────

export function Sidebar001Separator({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "px-0 py-2.5 mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70",
        className
      )}
    >
      {children}
    </div>
  )
}

// ─── Sidebar001Group ──────────────────────────────────────────────────────────

export interface Sidebar001GroupProps {
  label: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
  className?: string
}

export function Sidebar001Group({
  label,
  children,
  defaultOpen = true,
  icon,
  className,
}: Sidebar001GroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const { playHoverThrottled, playClick } = useContext(SidebarSoundContext)

  return (
    <div className={cn("flex flex-col", className)}>
      <button
        type="button"
        onClick={() => {
          playClick()
          setIsOpen((v) => !v)
        }}
        onMouseEnter={() => playHoverThrottled()}
        className="relative z-1 flex items-center gap-1.5 py-1.5 pr-2 select-none text-left w-full group cursor-pointer"
      >
        {icon ? (
          <>
            <span className="shrink-0 text-foreground/45 [&_svg]:size-3.5">
              {icon}
            </span>
            <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-150 flex-1">
              {label}
            </span>
            <MotionChevron
              size={14}
              strokeWidth={2.5}
              className="shrink-0 text-foreground/35 mr-1"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </>
        ) : (
          <>
            <MotionChevron
              size={11}
              strokeWidth={2.5}
              className="shrink-0 text-foreground/45"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-150">
              {label}
            </span>
          </>
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex flex-col pl-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Sidebar001Section ────────────────────────────────────────────────────────

export function Sidebar001Section({
  label,
  children,
  className,
}: {
  label?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col mb-4", className)}>
      {label && <Sidebar001Separator>{label}</Sidebar001Separator>}
      {children}
    </div>
  )
}

// ─── Sidebar001Content ────────────────────────────────────────────────────────

export function Sidebar001Content({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { onScroll } = useContext(SidebarSoundContext)

  return (
    <div
      className={cn("flex-1 overflow-y-auto py-3 no-scrollbar", className)}
      data-scroll-viewport
      onScroll={onScroll}
    >
      <div className="relative px-1 pb-10">
        {children}
      </div>
    </div>
  )
}

// ─── Sidebar001 (with resize) ─────────────────────────────────────────────────

export interface Sidebar001Props {
  children: React.ReactNode
  className?: string
  /** Initial width in px. Default: 260 */
  defaultWidth?: number
  /** Min resize width in px. Default: 200 */
  minWidth?: number
  /** Max resize width in px. Default: 380 */
  maxWidth?: number
}

export function Sidebar001({
  children,
  className,
  defaultWidth = 260,
  minWidth = 200,
  maxWidth = 380,
}: Sidebar001Props) {
  const [width, setWidth] = useState(defaultWidth)
  const dragging = useRef(false)
  const startX = useRef(0)
  const startW = useRef(0)

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault()
      dragging.current = true
      startX.current = e.clientX
      startW.current = width
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    },
    [width]
  )

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return
      const next = Math.min(
        maxWidth,
        Math.max(minWidth, startW.current + e.clientX - startX.current)
      )
      setWidth(next)
    },
    [minWidth, maxWidth]
  )

  const onPointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  return (
    <SidebarSoundProvider>
      <aside
        className={cn(
          "relative flex flex-col h-full shrink-0 bg-transparent",
          className
        )}
        style={{ width }}
      >
        {children}

        {/* Resize handle */}
        <div
          className="absolute top-0 right-0 h-full w-1 cursor-col-resize group/handle z-20"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div className="absolute right-0 top-0 h-full w-px bg-border/40 group-hover/handle:bg-border transition-colors duration-150" />
        </div>
      </aside>
    </SidebarSoundProvider>
  )
}

// ─── High-Level Docs Sidebar Component ────────────────────────────────────────

interface DocsSidebarProps {
  onItemClick?: () => void
  className?: string
}

export function DocsSidebar({ onItemClick, className }: DocsSidebarProps) {
  const location = useLocation()
  const pathname = location.pathname
  const { playHoverThrottled, playClick } = useContext(SidebarSoundContext)

  const gettingStartedItems = [
    { href: "/docs/introduction", label: "Introduction" },
    { href: "/docs/installation", label: "Installation" },
    { href: "/docs/components", label: "Components" },
  ]

  return (
    <Sidebar001Content className={className}>
      {/* Getting Started Section */}
      <Sidebar001Group
        label="Getting Started"
        icon={<BookOpen className="size-3.5" />}
        defaultOpen={true}
      >
        {gettingStartedItems.map((item) => (
          <Sidebar001Item
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={
              pathname === item.href ||
              (item.href === "/docs/introduction" && pathname === "/docs")
            }
            onClick={onItemClick}
          />
        ))}
      </Sidebar001Group>

      {/* Components Section */}
      <div className="mt-3">
        <Sidebar001Group
          label="Components"
          icon={<Layers className="size-3.5" />}
          defaultOpen={true}
        >
          {COMPONENTS_REGISTRY.map((comp) => (
            <Sidebar001Item
              key={comp.slug}
              href={comp.href}
              label={comp.title}
              isActive={pathname === comp.href}
              onClick={onItemClick}
            />
          ))}
        </Sidebar001Group>
      </div>

      {/* Showcase link */}
      <div className="mt-4 pt-4 border-t border-border/40 px-2">
        <Link
          to="/preview"
          onMouseEnter={() => playHoverThrottled()}
          onClick={() => {
            playClick()
            onItemClick?.()
          }}
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent/60 hover:text-foreground transition-colors"
        >
          <Sparkles className="size-3.5 text-amber-500" />
          <span>Full Visual Showcase</span>
        </Link>
      </div>
    </Sidebar001Content>
  )
}
