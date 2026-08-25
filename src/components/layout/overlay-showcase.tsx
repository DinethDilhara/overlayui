import { useEffect, useState } from "react"

import MatchIntro from "@/components/overlayui/match-intro"
import WeatherCard from "@/components/overlayui/weather-card"
import PointTableCard from "@/components/overlayui/point-table-card"
import FixturesCard from "@/components/overlayui/fixtures-card"
import FixturesNResultsCard from "@/components/overlayui/fixtures-results-card"
import MatchOfficialsCard from "@/components/overlayui/match-officials-card"
import TeamPlayersCard from "@/components/overlayui/team-players-card"
import TeamFormationCard from "@/components/overlayui/team-formation-card"
import ScoreBugCard from "@/components/overlayui/score-bug-card"
import ScoreBugExtraTimeCard from "@/components/overlayui/score-bug-extra-time-card"
import ScoreboardOverlay from "@/components/overlayui/score-bug-lower-third"
import HydrationBreakBug from "@/components/overlayui/hydration-break-bug"
import HalfTimeCard from "@/components/overlayui/half-time-card"
import TeamsNamesLowerThird from "@/components/overlayui/team-names-lower-third"
import SubstitutesInCard from "@/components/overlayui/substitutes-in-card"
import SubstitutesOutCard from "@/components/overlayui/substitutes-out-card"
import CoachCard from "@/components/overlayui/coach-card"
import YellowCardOverlay from "@/components/overlayui/yellow-card"
import RedCardOverlay from "@/components/overlayui/red-card"
import GoalNameCard from "@/components/overlayui/goal-name-card"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"
import playerImgOne from "@/assets/player-1-img.png"
import playerImgTwo from "@/assets/player-2-img.png"

const showcaseComponents = [
  <MatchIntro
    teamOneName="RENOWN FC"
    teamTwoName="RATNAM SC"
    teamOneLogo={team01Logo}
    teamTwoLogo={team02Logo}
    tournamentLogo={wcLogo}
    organizerName="FOOTBALL SRI LANKA"
    week="WEEK 1"
    match="MATCH 4"
  />,

  <WeatherCard
    weatherStatus="PARTLY_CLOUDY"
    temperature={31}
    humidity={73}
    windSpeed={19}
    tournamentLogo={wcLogo}
  />,

  <PointTableCard
    tournamentLogo={wcLogo}
    tournamentName="SUPER LEAGUE 2026"
    organizerName="FOOTBALL SRI LANKA"
    title="POINTS TABLE"
    weekNumber="WEEK 1"
  />,

  <FixturesCard
    tournamentLogo={wcLogo}
    tournamentName="SUPER LEAGUE 2026"
    organizerName="FOOTBALL SRI LANKA"
    title="FIXTURES"
    weekNumber="WEEK 1"
  />,

  <FixturesNResultsCard
    tournamentLogo={wcLogo}
    tournamentName="SUPER LEAGUE 2026"
    organizerName="FOOTBALL SRI LANKA"
    title="FIXTURES & RESULTS"
    weekNumber="WEEK 1"
  />,

  <MatchOfficialsCard
    tournamentLogo={wcLogo}
    referee="SASHANKA MADUSHANKA"
    assistantReferee1="KUSHAN INDIKA"
    assistantReferee2="NIMASHA THENNAKOON"
    fourthOfficial="VIHANGA MADUWANTHA"
    refereeColor="#7ED8FF"
  />,

  <TeamPlayersCard
    tournamentLogo={wcLogo}
    teamLogo={team01Logo}
    teamName="RENOWN FC"
    headCoachName="FAZLUR RAHUMAN"
    captainImage={playerImgOne}
  />,

  <TeamPlayersCard
    tournamentLogo={wcLogo}
    teamLogo={team02Logo}
    teamName="RATNAM SC"
    headCoachName="KASUN JAYASURIYA"
    captainImage={playerImgTwo}
  />,

  <TeamFormationCard
    tournamentLogo={wcLogo}
    teamLogo={team02Logo}
    teamName="COLOMBO FC"
    headCoachName="KASUN JAYASURIYA"
    formationType="4-3-3"
  />,

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
  />,

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
  />,

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
  />,

  <HydrationBreakBug tournamentLogo={wcLogo} />,

  <HalfTimeCard
    title="HALF TIME"
    homeTeamName="RENOWN FC"
    homeTeamLogo={team01Logo}
    homeTeamScore={0}
    awayTeamName="RATNAM SC"
    awayTeamLogo={team02Logo}
    awayTeamScore={0}
    tournamentName="SUPER LEAGUE 2026"
  />,

  <HalfTimeCard
    title="FULL TIME"
    homeTeamName="RENOWN FC"
    homeTeamLogo={team01Logo}
    homeTeamScore={0}
    awayTeamName="RATNAM SC"
    awayTeamLogo={team02Logo}
    awayTeamScore={1}
    tournamentName="SUPER LEAGUE 2026"
  />,

  <TeamsNamesLowerThird
    homeTeamName="Colombo FC"
    homeTeamLogo={team01Logo}
    awayTeamName="Kandy United"
    awayTeamLogo={team02Logo}
    tournamentLogo={wcLogo}
    tournamentName="Super League"
    tournamentYear="2026"
    venue="Sugathadasa Stadium"
  />,

  <SubstitutesInCard
    teamLogo={team01Logo}
    playerNumber="10"
    playerName="FAZLUR RAHUMAN"
    tournamentLogo={wcLogo}
  />,

  <SubstitutesOutCard
    teamLogo={team01Logo}
    playerNumber="10"
    playerName="FAZLUR RAHUMAN"
    tournamentLogo={wcLogo}
  />,

  <CoachCard
    teamLogo={team01Logo}
    coachName="FAZLUR RAHUMAN"
    tournamentLogo={wcLogo}
  />,

  <YellowCardOverlay
    teamLogo={team01Logo}
    playerNumber="8"
    playerName="AMAN FAIZER"
    tournamentLogo={wcLogo}
  />,

  <RedCardOverlay
    teamLogo={team01Logo}
    playerNumber="8"
    playerName="AMAN FAIZER"
    tournamentLogo={wcLogo}
  />,

  <GoalNameCard
    teamLogo={team01Logo}
    playerNumber="8"
    playerName="AMAN FAIZER"
    tournamentLogo={wcLogo}
  />,
]

export default function OverlayShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current + 1 >= showcaseComponents.length ? 0 : current + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return <div className="h-full w-full">{showcaseComponents[activeIndex]}</div>
}
