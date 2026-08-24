import { Link, NavLink } from "react-router"
import { ThemeToggle } from "@/components/theme-toggle"
import { OverlayuiIcon } from "@/components/layout/overlayui-icon"
import { cn } from "@/utils/utils"

export type NavbarVariant = "default" | "compact" | "docs" | "home"

interface NavbarProps {
    onMenuToggle?: () => void
    showMenuButton?: boolean
    variant?: NavbarVariant
    className?: string
}

export function Navbar({
    onMenuToggle,
    showMenuButton = false,
    variant = "default",
    className,
}: NavbarProps) {
    const isCompact = variant === "compact" || variant === "home"

    return (
        <header
            className={cn(
                "sticky top-4 z-40 mx-auto w-full transition-all duration-300",
                isCompact
                    ? "max-w-4xl px-4 sm:px-6"
                    : "max-w-7xl px-4 sm:px-6 lg:px-8",
                className
            )}
        >
            <nav className="flex h-15 items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-4 sm:px-6 shadow-sm backdrop-blur-md transition-all">
                {/* Left: Brand */}
                <div className="flex items-center gap-3">
                    {showMenuButton && (
                        <button
                            type="button"
                            onClick={onMenuToggle}
                            className="flex size-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </button>
                    )}

                    <Link
                        to="/"
                        className="group flex items-center gap-2.5 text-base font-semibold tracking-tight transition-colors hover:text-foreground/80"
                    >
                        <OverlayuiIcon className="group-hover:scale-105" />
                        <span className="font-bold text-xl tracking-tight text-foreground">
                            Overlay<span className="text-muted-foreground font-normal">UI</span>
                        </span>
                        <span className="hidden sm:inline-flex items-center rounded-full bg-accent/80 px-2 py-0.5 text-xs font-medium text-foreground/70 border border-border/40">
                            v0.1
                        </span>
                    </Link>
                </div>

                {/* Right: Navigation Links & Theme Toggle */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <NavLink
                        to="/docs/introduction"
                        className={({ isActive }) =>
                            cn(
                                "flex items-center rounded-lg px-3.5 py-1.5 text-sm sm:text-base font-medium transition-colors",
                                isActive
                                    ? "bg-accent text-foreground font-semibold"
                                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                            )
                        }
                    >
                        <span>Docs</span>
                    </NavLink>

                    {/* Hidden in mobile and tablet view, visible on desktop (lg+) */}
                    <NavLink
                        to="/preview"
                        className={({ isActive }) =>
                            cn(
                                "hidden lg:flex items-center rounded-lg px-3.5 py-1.5 text-sm sm:text-base font-medium transition-colors",
                                isActive
                                    ? "bg-accent text-foreground font-semibold"
                                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                            )
                        }
                    >
                        <span>Preview</span>
                    </NavLink>

                    <div className="mx-1 h-5 w-px bg-border/60" />

                    <ThemeToggle className="relative size-9 rounded-lg shrink-0 border border-border/60 hover:bg-accent" />
                </div>
            </nav>
        </header>
    )
}
