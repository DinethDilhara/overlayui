import { TOCMinimap } from "@/components/toc-minimap"
import { ThemeToggle } from "@/hooks/theme-toggle"
import { SectionNavigation } from "@/components/section-navigation"
import { SectionTitle } from "@/components/section-title"

const sections = [
  "Match Intro",
  "Weather",
  "Points Table",
  "Fixtures",
  "Fixtures & Results",
  "Results",
  "Match Officials",
  "Team A Card with Playing Names",
  "Team B Card with Playing Names",
  "Team A Card with Formation",
  "Team B Card with Formation",
  "Score Bug (Team Short Name, Logo, Jersy Color, Score, Time)",
  "Extra Time",
  "Score Bug Lower Third",
  "Bugs (Hydration Break, Highlights, Goal Chances)",
  "Half Time / Full Time Score",
  "Team Names Lower Third",
  "Substitutes 1, 2, 3",
  "Coach Name",
  "Yellow Card Name",
  "Red Card Name",
  "Goal Name",
]

const toc = sections.map((title, index) => ({
  title: `${index + 1}. ${title}`,
  url: `#section-${index + 1}`,
  depth: 2,
}))

export default function App() {
  return (
    <>
      <main>
        <ThemeToggle />
        <SectionNavigation />
        <SectionTitle />

        {sections.map((title, index) => (
          <section
            key={title}
            id={`section-${index + 1}`}
            className="flex h-screen w-screen items-center justify-center border-b border-gray-300"
          >
            <h2 className="text-4xl font-bold">
              {index + 1}. {title}
            </h2>
          </section>
        ))}
      </main>

      <div className="fixed top-1/2 right-6 -translate-y-1/2">
        <TOCMinimap items={toc} />
      </div>
    </>
  )
}
