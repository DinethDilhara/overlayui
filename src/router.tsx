import { createBrowserRouter, Navigate } from "react-router"

import HomePage from "@/pages/home"
import PreviewPage from "@/pages/preview"
import { DocsLayout } from "@/components/layout/docs-layout"

import IntroductionPage from "@/pages/docs/introduction"
import InstallationPage from "@/pages/docs/installation"
import ComponentsIndexPage from "@/pages/docs/components"

import MatchIntroDocsPage from "@/pages/docs/components/match-intro"
import WeatherCardDocsPage from "@/pages/docs/components/weather-card"
import PointTableCardDocsPage from "@/pages/docs/components/point-table-card"
import FixturesCardDocsPage from "@/pages/docs/components/fixtures-card"
import FixturesResultsCardDocsPage from "@/pages/docs/components/fixtures-results-card"
import MatchOfficialsCardDocsPage from "@/pages/docs/components/match-officials-card"
import TeamPlayersCardDocsPage from "@/pages/docs/components/team-players-card"
import TeamFormationCardDocsPage from "@/pages/docs/components/team-formation-card"
import ScoreBugCardDocsPage from "@/pages/docs/components/score-bug-card"
import ScoreBugExtraTimeCardDocsPage from "@/pages/docs/components/score-bug-extra-time-card"
import ScoreBugLowerThirdDocsPage from "@/pages/docs/components/score-bug-lower-third"
import HydrationBreakDocsPage from "@/pages/docs/components/hydration-break"
import HalfTimeCardDocsPage from "@/pages/docs/components/half-time-card"
import TeamNamesLowerThirdDocsPage from "@/pages/docs/components/team-names-lower-third"
import SubstitutesInCardDocsPage from "@/pages/docs/components/substitutes-in-card"
import SubstitutesOutCardDocsPage from "@/pages/docs/components/substitutes-out-card"
import CoachCardDocsPage from "@/pages/docs/components/coach-card"
import YellowCardDocsPage from "@/pages/docs/components/yellow-card"
import RedCardDocsPage from "@/pages/docs/components/red-card"
import GoalNameCardDocsPage from "@/pages/docs/components/goal-name-card"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/preview",
    element: <PreviewPage />,
  },
  {
    path: "/docs",
    element: <DocsLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/docs/introduction" replace />,
      },
      {
        path: "introduction",
        element: <IntroductionPage />,
      },
      {
        path: "installation",
        element: <InstallationPage />,
      },
      {
        path: "components",
        element: <ComponentsIndexPage />,
      },
      {
        path: "components/match-intro",
        element: <MatchIntroDocsPage />,
      },
      {
        path: "components/weather-card",
        element: <WeatherCardDocsPage />,
      },
      {
        path: "components/point-table-card",
        element: <PointTableCardDocsPage />,
      },
      {
        path: "components/fixtures-card",
        element: <FixturesCardDocsPage />,
      },
      {
        path: "components/fixtures-results-card",
        element: <FixturesResultsCardDocsPage />,
      },
      {
        path: "components/match-officials-card",
        element: <MatchOfficialsCardDocsPage />,
      },
      {
        path: "components/team-players-card",
        element: <TeamPlayersCardDocsPage />,
      },
      {
        path: "components/team-formation-card",
        element: <TeamFormationCardDocsPage />,
      },
      {
        path: "components/score-bug-card",
        element: <ScoreBugCardDocsPage />,
      },
      {
        path: "components/score-bug-extra-time-card",
        element: <ScoreBugExtraTimeCardDocsPage />,
      },
      {
        path: "components/score-bug-lower-third",
        element: <ScoreBugLowerThirdDocsPage />,
      },
      {
        path: "components/hydration-break",
        element: <HydrationBreakDocsPage />,
      },
      {
        path: "components/half-time-card",
        element: <HalfTimeCardDocsPage />,
      },
      {
        path: "components/team-names-lower-third",
        element: <TeamNamesLowerThirdDocsPage />,
      },
      {
        path: "components/substitutes-in-card",
        element: <SubstitutesInCardDocsPage />,
      },
      {
        path: "components/substitutes-out-card",
        element: <SubstitutesOutCardDocsPage />,
      },
      {
        path: "components/coach-card",
        element: <CoachCardDocsPage />,
      },
      {
        path: "components/yellow-card",
        element: <YellowCardDocsPage />,
      },
      {
        path: "components/red-card",
        element: <RedCardDocsPage />,
      },
      {
        path: "components/goal-name-card",
        element: <GoalNameCardDocsPage />,
      },
      {
        path: "*",
        element: <Navigate to="/docs/introduction" replace />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
])
