export interface ComponentMeta {
  id: string
  title: string
  slug: string
  description: string
  href: string
  filename: string
  category: "Matches & Fixtures" | "Teams & Lineups" | "Match Officials" | "Score Bugs" | "Match Events & Cards" | "General"
}

export const COMPONENTS_REGISTRY: ComponentMeta[] = [
  {
    id: "match-intro",
    title: "Match Intro",
    slug: "match-intro",
    description: "Broadcast intro card showing competing team names, logos, tournament branding, week, and match numbers.",
    href: "/docs/components/match-intro",
    filename: "01.match-intro.tsx",
    category: "Matches & Fixtures",
  },
  {
    id: "weather-card",
    title: "Weather Card",
    slug: "weather-card",
    description: "Matchday weather conditions card displaying live temperature, status, humidity, and wind speed.",
    href: "/docs/components/weather-card",
    filename: "02.weather-card.tsx",
    category: "General",
  },
  {
    id: "point-table-card",
    title: "Point Table Card",
    slug: "point-table-card",
    description: "Comprehensive tournament league table showing standings, played, won, drawn, lost, and total points.",
    href: "/docs/components/point-table-card",
    filename: "03.point-table-card.tsx",
    category: "Matches & Fixtures",
  },
  {
    id: "fixtures-card",
    title: "Fixtures Card",
    slug: "fixtures-card",
    description: "Upcoming match schedule and fixtures list with tournament branding and match times.",
    href: "/docs/components/fixtures-card",
    filename: "04.fixtures-card.tsx",
    category: "Matches & Fixtures",
  },
  {
    id: "fixtures-results-card",
    title: "Fixtures Results Card",
    slug: "fixtures-results-card",
    description: "Combined fixtures and completed match results card with scores and tournament rankings.",
    href: "/docs/components/fixtures-results-card",
    filename: "05.fixtures-results-card.tsx",
    category: "Matches & Fixtures",
  },
  {
    id: "match-officials-card",
    title: "Match Officials Card",
    slug: "match-officials-card",
    description: "Referee, assistant referees, and fourth official broadcast presentation card.",
    href: "/docs/components/match-officials-card",
    filename: "07.match-officials-card.tsx",
    category: "Match Officials",
  },
  {
    id: "team-players-card",
    title: "Team Players Card",
    slug: "team-players-card",
    description: "Starting XI player squad list with head coach, captain cutout portrait, and team crest.",
    href: "/docs/components/team-players-card",
    filename: "08.team-players-card.tsx",
    category: "Teams & Lineups",
  },
  {
    id: "team-formation-card",
    title: "Team Formation Card",
    slug: "team-formation-card",
    description: "Tactical pitch view displaying team formation (e.g., 4-3-3) with player jersey numbers and positions.",
    href: "/docs/components/team-formation-card",
    filename: "10.team-formation-card.tsx",
    category: "Teams & Lineups",
  },
  {
    id: "score-bug-card",
    title: "Score Bug",
    slug: "score-bug-card",
    description: "Live broadcast score bug with match clock, team logos, kit colors, and current score.",
    href: "/docs/components/score-bug-card",
    filename: "12.score-bug-card.tsx",
    category: "Score Bugs",
  },
  {
    id: "score-bug-extra-time-card",
    title: "Score Bug Extra Time",
    slug: "score-bug-extra-time-card",
    description: "Score bug enhanced with extra time and stoppage time indicators.",
    href: "/docs/components/score-bug-extra-time-card",
    filename: "13.score-bug-extra-time-card.tsx",
    category: "Score Bugs",
  },
  {
    id: "score-bug-lower-third",
    title: "Score Bug Lower Third",
    slug: "score-bug-lower-third",
    description: "Sleek lower-third scoreboard overlay for live match broadcasting.",
    href: "/docs/components/score-bug-lower-third",
    filename: "14.score-bug-lower-third.tsx",
    category: "Score Bugs",
  },
  {
    id: "hydration-break",
    title: "Hydration Break",
    slug: "hydration-break",
    description: "Broadcast bug indicator for hydration breaks, cooling pauses, or match stoppages.",
    href: "/docs/components/hydration-break",
    filename: "15.bug-hydration-break.tsx",
    category: "Score Bugs",
  },
  {
    id: "half-time-card",
    title: "Half Time Card",
    slug: "half-time-card",
    description: "Half time and full time score summary display card.",
    href: "/docs/components/half-time-card",
    filename: "16.half-time-card.tsx",
    category: "Score Bugs",
  },
  {
    id: "team-names-lower-third",
    title: "Team Names Lower Third",
    slug: "team-names-lower-third",
    description: "Lower third banner showing competing teams, match venue, and tournament metadata.",
    href: "/docs/components/team-names-lower-third",
    filename: "17.team-names-lower-third.tsx",
    category: "Teams & Lineups",
  },
  {
    id: "substitutes-in-card",
    title: "Substitutes In",
    slug: "substitutes-in-card",
    description: "Match event graphic announcing a substitution coming onto the pitch.",
    href: "/docs/components/substitutes-in-card",
    filename: "18.substitutes-in-card.tsx",
    category: "Match Events & Cards",
  },
  {
    id: "substitutes-out-card",
    title: "Substitutes Out",
    slug: "substitutes-out-card",
    description: "Match event graphic announcing a substituted player leaving the pitch.",
    href: "/docs/components/substitutes-out-card",
    filename: "18.substitutes-out-card.tsx",
    category: "Match Events & Cards",
  },
  {
    id: "coach-card",
    title: "Coach Card",
    slug: "coach-card",
    description: "Lower third overlay displaying the head coach name and team emblem.",
    href: "/docs/components/coach-card",
    filename: "19.coach-card.tsx",
    category: "Teams & Lineups",
  },
  {
    id: "yellow-card",
    title: "Yellow Card",
    slug: "yellow-card",
    description: "Disciplinary yellow card overlay with player name, jersey number, and team badge.",
    href: "/docs/components/yellow-card",
    filename: "20.yellow-card.tsx",
    category: "Match Events & Cards",
  },
  {
    id: "red-card",
    title: "Red Card",
    slug: "red-card",
    description: "Disciplinary red card overlay with player name, jersey number, and team badge.",
    href: "/docs/components/red-card",
    filename: "21.red-card.tsx",
    category: "Match Events & Cards",
  },
  {
    id: "goal-name-card",
    title: "Goal Name Card",
    slug: "goal-name-card",
    description: "Goal celebration lower third highlighting the goalscorer's name and number.",
    href: "/docs/components/goal-name-card",
    filename: "22.goal-name-card.tsx",
    category: "Match Events & Cards",
  },
]

export function getComponentBySlug(slug: string): ComponentMeta | undefined {
  return COMPONENTS_REGISTRY.find((c) => c.slug === slug)
}

export function getAdjacentComponents(slug: string): {
  prev?: ComponentMeta
  next?: ComponentMeta
} {
  const index = COMPONENTS_REGISTRY.findIndex((c) => c.slug === slug)
  if (index === -1) return {}
  return {
    prev: index > 0 ? COMPONENTS_REGISTRY[index - 1] : undefined,
    next: index < COMPONENTS_REGISTRY.length - 1 ? COMPONENTS_REGISTRY[index + 1] : undefined,
  }
}
