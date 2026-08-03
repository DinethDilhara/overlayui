import { useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, ChevronsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useSound } from "@/hooks/use-sound"
import { metalClickSound } from "@/lib/metal-click"

export function SectionNavigation() {
  const [play] = useSound(metalClickSound, {
    volume: 0.3,
  })

  const isScrolling = useRef(false)

  const scrollToSection = (direction: "up" | "down") => {
    if (isScrolling.current) {
      return
    }

    const sections = Array.from(
      document.querySelectorAll("section[id^='section-']")
    )

    const currentIndex = sections.findIndex((section) => {
      const rect = section.getBoundingClientRect()

      return rect.top >= -10 && rect.top <= window.innerHeight / 2
    })

    let targetIndex = currentIndex

    if (direction === "up") {
      targetIndex = Math.max(0, currentIndex - 1)
    }

    if (direction === "down") {
      targetIndex = Math.min(sections.length - 1, currentIndex + 1)
    }

    if (targetIndex !== currentIndex) {
      play()

      isScrolling.current = true

      sections[targetIndex]?.scrollIntoView({
        behavior: "smooth",
      })

      setTimeout(() => {
        isScrolling.current = false
      }, 700)
    }
  }


  const scrollToTop = () => {
    play()

    document
      .getElementById("section-1")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLElement &&
        (event.target.isContentEditable ||
          event.target.closest(
            "input, textarea, select, [contenteditable='true']"
          ))
      ) {
        return
      }

      if (event.key === "ArrowUp") {
        event.preventDefault()
        scrollToSection("up")
      }

      if (event.key === "ArrowDown") {
        event.preventDefault()
        scrollToSection("down")
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])


  return (
    <div className="fixed top-17 right-6 z-50 flex flex-col gap-2">
      {/* GO TOP */}
      <Button
        variant="outline"
        size="icon"
        onClick={scrollToTop}
      >
        <ChevronsUp />
      </Button>

      {/* PREVIOUS */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => scrollToSection("up")}
      >
        <ChevronUp />
      </Button>

      {/* NEXT */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => scrollToSection("down")}
      >
        <ChevronDown />
      </Button>
    </div>
  )
}