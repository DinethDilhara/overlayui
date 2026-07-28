import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function SectionTitle() {
  const [activeTitle, setActiveTitle] = useState("")

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[id^='section-']")
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const title =
              entry.target.querySelector("h2")?.textContent ?? ""

            setActiveTitle(title)
          }
        }
      },
      {
        threshold: 0.6,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <Button
      variant="outline"
      className="fixed left-6 top-6 z-50"
    >
      {activeTitle}
    </Button>
  )
}