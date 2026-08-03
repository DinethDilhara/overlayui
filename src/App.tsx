import { TOCMinimap } from "@/components/toc-minimap"
import { ThemeToggle } from "@/components/theme-toggle"
import { SectionNavigation } from "@/components/section-navigation"
import { SectionTitle } from "@/components/section-title"

import MatchIntro from "@/components/overlayui/01.match-intro"
import WeatherCard from "@/components/overlayui/02.weather-card"
import PointTableCard from "@/components/overlayui/03.point-table-card"
import FixturesCard from "@/components/overlayui/04.fixtures-card"
import FixturesNResultsCard from "@/components/overlayui/05.fixtures-results-card"
import MatchOfficialsCard from "@/components/overlayui/07.match-officials-card"
import TeamPlayersCard from "@/components/overlayui/08.team-players-card"
import TeamFormationCard from "@/components/overlayui/10.team-formation-card"
import ScoreBugCard from "@/components/overlayui/12.score-bug-card"
import ScoreBugExtraTimeCard from "@/components/overlayui/13.score-bug-extra-time-card"
import ScoreboardOverlay from "@/components/overlayui/14.score-bug-lower-third"
import HydrationBreakBug from "@/components/overlayui/15.bug-hydration-break"
import HalfTimeCard from "@/components/overlayui/16.half-time-card"
import TeamsNamesLowerThird from "@/components/overlayui/17.team-names-lower-third"
import SubstitutesInCard from "@/components/overlayui/18.substitutes-in-card"
import SubstitutesOutCard from "@/components/overlayui/18.substitutes-out-card"
import CoachCard from "@/components/overlayui/19.coach-card"
import YellowCardOverlay from "@/components/overlayui/20.yellow-card"
import RedCardOverlay from "@/components/overlayui/21.red-card"
import GoalNameCard from "@/components/overlayui/22.goal-name-card"

import OverlayShowcase from "@/components/overlay-showcase"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"
import playerImgOne from "@/assets/player-1-img.png"
import playerImgTwo from "@/assets/player-2-img.png"

const sections = [
  {
    title: "Overlay Showcase",
    component: <OverlayShowcase />,
  },
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
    component: (
      <PointTableCard
        tournamentLogo={wcLogo}
        tournamentName="SUPER LEAGUE 2026"
        organizerName="FOOTBALL SRI LANKA"
        title="POINTS TABLE"
        weekNumber="WEEK 1"
      />
    ),
  },
  {
    title: "Fixtures",
    component: (
      <FixturesCard
        tournamentLogo={wcLogo}
        tournamentName="SUPER LEAGUE 2026"
        organizerName="FOOTBALL SRI LANKA"
        title="FIXTURES"
        weekNumber="WEEK 1"
      />
    ),
  },
  {
    title: "Fixtures & Results",
    component: (
      <FixturesNResultsCard
        tournamentLogo={wcLogo}
        tournamentName="SUPER LEAGUE 2026"
        organizerName="FOOTBALL SRI LANKA"
        title="FIXTURES & RESULTS"
        weekNumber="WEEK 1"
      />
    ),
  },
  {
    title: "Match Officials",
    component: (
      <MatchOfficialsCard
        tournamentLogo={wcLogo}
        referee="SASHANKA MADUSHANKA"
        assistantReferee1="KUSHAN INDIKA"
        assistantReferee2="NIMASHA THENNAKOON"
        fourthOfficial="VIHANGA MADUWANTHA"
        refereeColor="#7ED8FF"
      />
    ),
  },
  {
    title: "Team A Card with Playing Names",
    component: (
      <TeamPlayersCard
        tournamentLogo={wcLogo}
        teamLogo={team01Logo}
        teamName="RENOWN FC"
        headCoachName="FAZLUR RAHUMAN"
        captainImage={playerImgOne}
      />
    ),
  },
  {
    title: "Team B Card with Playing Names",
    component: (
      <TeamPlayersCard
        tournamentLogo={wcLogo}
        teamLogo={team02Logo}
        teamName="RATNAM SC"
        headCoachName="KASUN JAYASURIYA"
        captainImage={playerImgTwo}
      />
    ),
  },
  {
    title: "Team A Card with Formation",
    component: (
      <TeamFormationCard
        tournamentLogo={wcLogo}
        teamLogo={team02Logo}
        teamName="COLMBO FC"
        headCoachName="KASUN JAYASURIYA"
        formationType="4-3-3"
      />
    ),
  },
  {
    title: "Score Bug (Team Short Name, Logo, Jersey Color, Score, Time)",
    component: (
      <ScoreBugCard
        matchTimer="64:21"
        tournamentName="SUPER LEAGUE 2026"
        tournamentLogo={wcLogo}
        homeTeamShortName="COL"
        homeTeamLogo={team01Logo}
        homeTeamScore={2}
        homeTeamJerseyColor="#008AAF"
        awayTeamShortName="KAN"
        awayTeamLogo={team02Logo}
        awayTeamScore={1}
        awayTeamJerseyColor="#ffffff"
      />
    ),
  },
  {
    title: "Extra Time",
    component: (
      <ScoreBugExtraTimeCard
        matchTimer="64:21"
        extraTimer="00:12"
        extraTime="5"
        tournamentName="SUPER LEAGUE 2026"
        tournamentLogo={wcLogo}
        homeTeamShortName="COL"
        homeTeamLogo={team01Logo}
        homeTeamScore={0}
        homeTeamJerseyColor="#008AAF"
        awayTeamShortName="KAN"
        awayTeamLogo={team02Logo}
        awayTeamScore={0}
        awayTeamJerseyColor="#ffffff"
      />
    ),
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
