import { TOCMinimap } from "@/components/toc-minimap"
import { ThemeToggle } from "@/components/theme-toggle"
import { SectionNavigation } from "@/components/section-navigation"
import { SectionTitle } from "@/components/section-title"

import { MatchIntro } from "@/components/overlayui/01.match-intro"
import YellowCardOverlay from "@/components/overlayui/20.yellow-card"
import RedCardOverlay from "@/components/overlayui/21.red-card"
import GoalNameCard from "@/components/overlayui/22.goal-name-card"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"

const sections = [
  {
    title: "Match Intro",
    component: (
      <MatchIntro
        teamOneName="RENOWN FC"
        teamTwoName="RATNAM SC"
        teamOneLogo={team01Logo}
        teamTwoLogo={team02Logo}
        tournamentLogo={wcLogo}
        organizerName="FOOTBALL SRI LANKA"
        week="WEEK 1"
        match="MATCH 4"
      />
    ),
  },
  {
    title: "Weather",
  },
  {
    title: "Points Table",
  },
  {
    title: "Fixtures",
  },
  {
    title: "Fixtures & Results",
  },
  {
    title: "Results",
  },
  {
    title: "Match Officials",
  },
  {
    title: "Team A Card with Playing Names",
  },
  {
    title: "Team B Card with Playing Names",
  },
  {
    title: "Team A Card with Formation",
  },
  {
    title: "Team B Card with Formation",
  },
  {
    title: "Score Bug (Team Short Name, Logo, Jersey Color, Score, Time)",
  },
  {
    title: "Extra Time",
  },
  {
    title: "Score Bug Lower Third",
  },
  {
    title: "Bugs (Hydration Break, Highlights, Goal Chances)",
  },
  {
    title: "Half Time / Full Time Score",
  },
  {
    title: "Team Names Lower Third",
  },
  {
    title: "Substitutes 1, 2, 3",
  },
  {
    title: "Coach Name",
  },
  {
    title: "Yellow Card Name",
    component: (
      <YellowCardOverlay
        teamLogo={team01Logo}
        playerNumber="8"
        playerName="AMAN FAIZER"
        tournamentLogo={wcLogo}
      />
    ),
  },
  {
    title: "Red Card Name",
    component: (
      <RedCardOverlay
        teamLogo={team01Logo}
        playerNumber="8"
        playerName="AMAN FAIZER"
        tournamentLogo={wcLogo}
      />
    ),
  },
  {
    title: "Goal Name",
    component: (
      <GoalNameCard
        teamLogo={team01Logo}
        playerNumber="8"
        playerName="AMAN FAIZER"
        tournamentLogo={wcLogo}
      />
    ),
  },
]

const toc = sections.map((section, index) => ({
  title: `${index + 1}. ${section.title}`,
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

        {sections.map((section, index) => (
          <section
            key={section.title}
            id={`section-${index + 1}`}
            data-title={`${index + 1}. ${section.title}`}
            className="flex h-screen w-screen items-center justify-center border-b border-gray-300"
          >
            {section.component ?? (
              <h2 className="text-4xl font-bold">
                {index + 1}. {section.title}
              </h2>
            )}
          </section>
        ))}
      </main>

      <div className="fixed top-1/2 right-6 z-50 -translate-y-1/2">
        <TOCMinimap items={toc} />
      </div>
    </>
  )
}
