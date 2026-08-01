import { TOCMinimap } from "@/components/toc-minimap"
import { ThemeToggle } from "@/components/theme-toggle"
import { SectionNavigation } from "@/components/section-navigation"
import { SectionTitle } from "@/components/section-title"

import { MatchIntro } from "@/components/overlayui/01.match-intro"
import HydrationBreakBug from "@/components/overlayui/15.bug-hydration-break"
import CoachCard from "@/components/overlayui/19.coach-card"
import YellowCardOverlay from "@/components/overlayui/20.yellow-card"
import RedCardOverlay from "@/components/overlayui/21.red-card"
import GoalNameCard from "@/components/overlayui/22.goal-name-card"
import WeatherCard from "./components/overlayui/02.weather-card"
import SubstitutesInCard from "./components/overlayui/18.substitutes-in-card"
import SubstitutesOutCard from "./components/overlayui/18.substitutes-out-card"
import HalfTimeCard from "./components/overlayui/16.half-time-card"
import ScoreboardOverlay from "./components/overlayui/14.score-bug-lower-third"
import TeamsNamesLowerThird from "./components/overlayui/17.team-names-lower-third"

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
    component: (
      <WeatherCard
        weatherStatus="PARTLY_CLOUDY"
        temperature={31}
        humidity={73}
        windSpeed={19}
        tournamentLogo={wcLogo}
      />
    ),
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
    component: (
      <ScoreboardOverlay
        matchTimer="43:10"
        homeTeamName="RENOWN FC"
        homeTeamLogo={team01Logo}
        homeTeamScore={0}
        awayTeamName="RATNAM SC"
        awayTeamLogo={team02Logo}
        awayTeamScore={0}
        tournamentLogo={wcLogo}
        organizerName="Football Sri Lanka"
      />
    ),
  },
  {
    title: "Bugs (Hydration Break, Highlights, Goal Chances)",
    component: <HydrationBreakBug tournamentLogo={wcLogo} />,
  },
  {
    title: "Half Time Score",
    component: (
      <HalfTimeCard
        title="HALF TIME"
        homeTeamName="RENOWN FC"
        homeTeamLogo={team01Logo}
        homeTeamScore={0}
        awayTeamName="RATNAM SC"
        awayTeamLogo={team02Logo}
        awayTeamScore={0}
        tournamentName="SUPER LEAGUE 2026"
      />
    ),
  },
  {
    title: "Full Time Score",
    component: (
      <HalfTimeCard
        title="FULL TIME"
        homeTeamName="RENOWN FC"
        homeTeamLogo={team01Logo}
        homeTeamScore={0}
        awayTeamName="RATNAM SC"
        awayTeamLogo={team02Logo}
        awayTeamScore={1}
        tournamentName="SUPER LEAGUE 2026"
      />
    ),
  },
  {
    title: "Team Names Lower Third",
    component: (
      <TeamsNamesLowerThird
        homeTeamName="Colombo FC"
        homeTeamLogo={team01Logo}
        awayTeamName="Kandy United"
        awayTeamLogo={team02Logo}
        tournamentLogo={wcLogo}
        tournamentName="Super League"
        tournamentYear="2026"
        venue="Sugathadasa Stadium"
      />
    ),
  },
  {
    title: "Substitutes In",
    component: (
      <SubstitutesInCard
        teamLogo={team01Logo}
        playerNumber="10"
        playerName="FAZLUR RAHUMAN"
        tournamentLogo={wcLogo}
      />
    ),
  },
  {
    title: "Substitutes Out",
    component: (
      <SubstitutesOutCard
        teamLogo={team01Logo}
        playerNumber="10"
        playerName="FAZLUR RAHUMAN"
        tournamentLogo={wcLogo}
      />
    ),
  },
  {
    title: "Coach Name",
    component: (
      <CoachCard
        teamLogo={team01Logo}
        coachName="FAZLUR RAHUMAN"
        tournamentLogo={wcLogo}
      />
    ),
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
