import { MoonIcon, SunMediumIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useSound } from "@/hooks/use-sound"

import { clickSoftSound } from "@/lib/click-soft"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const [play] = useSound(clickSoftSound, {
    volume: 0.3,
  })

  const switchTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"

    play()

    if (!document.startViewTransition) {
      setTheme(nextTheme)
      return
    }

    document.startViewTransition(() => {
      setTheme(nextTheme)
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={switchTheme}
      aria-label="Toggle theme"
      className={className ?? "fixed top-6 right-6 z-50"}
    >
      <MoonIcon className="hidden [html.light_&]:block" />
      <SunMediumIcon className="hidden [html.dark_&]:block" />
    </Button>
  )
}
