import OverlayLayout from "@/components/overlayui/ui/full-screen-card"
import superLeagueLogo from "@/assets/ ssl.png"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"

const DEFAULT_TEAM_LOGOS = [team01Logo, team02Logo]

export interface PointTableRow {
  rank: number
  teamLogo: string
  teamName: string

  played: number
  won: number
  drawn: number
  lost: number

  goalsFor: number
  goalsAgainst: number
  goalDifference: number

  points: number
}

const POINT_TABLE_ROWS: PointTableRow[] = [
  {
    rank: 1,
    teamLogo: DEFAULT_TEAM_LOGOS[0],
    teamName: "UP COUNTRY LIONS",
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 9,
    goalsAgainst: 1,
    goalDifference: 8,
    points: 3,
  },
  {
    rank: 2,
    teamLogo: DEFAULT_TEAM_LOGOS[1],
    teamName: "BLUE EAGLES",
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0,
    points: 1,
  },
  {
    rank: 3,
    teamLogo: DEFAULT_TEAM_LOGOS[0],
    teamName: "NEW YOUNGS FC",
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0,
    points: 1,
  },
  {
    rank: 4,
    teamLogo: DEFAULT_TEAM_LOGOS[1],
    teamName: "COLOMBO FC",
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 1,
  },
  {
    rank: 5,
    teamLogo: DEFAULT_TEAM_LOGOS[0],
    teamName: "DEFENDERS FC",
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 1,
  },
  {
    rank: 6,
    teamLogo: DEFAULT_TEAM_LOGOS[1],
    teamName: "BLUE STAR SC",
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 1,
    goalsAgainst: 9,
    goalDifference: -8,
    points: 0,
  },
  {
    rank: 7,
    teamLogo: DEFAULT_TEAM_LOGOS[0],
    teamName: "RATNAM SC",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  },
  {
    rank: 8,
    teamLogo: DEFAULT_TEAM_LOGOS[1],
    teamName: "RENOWN SC",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  },
  {
    rank: 9,
    teamLogo: DEFAULT_TEAM_LOGOS[0],
    teamName: "RED STAR FC",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  },
  {
    rank: 10,
    teamLogo: DEFAULT_TEAM_LOGOS[1],
    teamName: "SEA HAWKS FC",
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  },
]

export interface PointTableCardProps {
  tournamentLogo?: string
  tournamentName?: string
  organizerName?: string
  title?: string
  weekNumber?: string
  pointTableRows?: PointTableRow[]
}

export default function PointTableCard({
  tournamentLogo,
  tournamentName = "SUPER LEAGUE 2026",
  organizerName = "FOOTBALL SRI LANKA",
  title = "POINT TABLE",
  weekNumber = "WEEK 1",
  pointTableRows = POINT_TABLE_ROWS,
}: PointTableCardProps) {
  const logoBlack = "#0D0D0D"

  return (
    <OverlayLayout>
      <div className="flex h-full w-full flex-col gap-3 p-3 pb-2">
        {/* HEADER */}
        <div className="grid h-24 grid-cols-[0.05fr_1fr] gap-2">
          {/* Tournament Logo */}
          <div className="flex items-center justify-center rounded-3xl bg-black shadow-2xl">
            <div
              className="flex h-[3.8vw] min-h-14 w-[3.8vw] min-w-14 items-center justify-center overflow-hidden rounded-2xl"
              style={{
                backgroundColor: logoBlack,
              }}
            >
              {typeof tournamentLogo === "string" ? (
                <img
                  src={tournamentLogo}
                  alt="Tournament Logo"
                  className="h-full w-full object-contain"
                />
              ) : (
                tournamentLogo
              )}
            </div>
          </div>

          {/* Title */}
          <div className="relative flex items-center justify-center rounded-3xl bg-[#3B3B3B] px-6 shadow-2xl">
            <span className="text-5xl font-bold text-white">
              {tournamentName} - {title}
            </span>

            <span className="absolute right-8 text-4xl font-bold text-[#D2A639]">
              {weekNumber}
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="relative grid min-h-0 flex-1 overflow-hidden rounded-3xl bg-[#3B3B3B] px-8 shadow-2xl">
          {/* Watermark */}
          <img
            src={superLeagueLogo}
            alt="Super League"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[90%] w-auto -translate-x-1/2 -translate-y-1/2 object-contain opacity-40"
          />

          {/* TABLE */}
          <div className="relative z-10 flex h-full min-h-0 flex-col p-4">
            {/* TABLE HEADER */}
            <div className="mb-2 grid grid-cols-[clamp(110px,9vw,160px)_clamp(360px,28vw,460px)_1fr] gap-5">
              <div className="flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-[#921E23] text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-white">
                RANK
              </div>

              <div className="flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-[#921E23] text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-white">
                TEAM
              </div>

              <div className="rounded-tl-2xl rounded-br-2xl bg-[#921E23] px-6">
                <div className="grid grid-cols-8 items-center text-center text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-white">
                  <span>P</span>
                  <span>W</span>
                  <span>D</span>
                  <span>L</span>
                  <span>GF</span>
                  <span>GA</span>
                  <span>GD</span>
                  <span>PTS</span>
                </div>
              </div>
            </div>

            {/* TABLE ROWS */}
            <div className="grid min-h-0 flex-1 grid-rows-10 gap-[clamp(3px,0.35vh,8px)] overflow-hidden">
              {pointTableRows.map((team) => (
                <div
                  key={team.rank}
                  className="grid h-full grid-cols-[clamp(110px,9vw,160px)_clamp(360px,28vw,460px)_1fr] gap-5"
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-black text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-white">
                    {team.rank}
                  </div>

                  {/* Team */}
                  <div className="flex items-center gap-5 rounded-tl-2xl rounded-br-2xl bg-black px-6">
                    <div className="flex h-[clamp(32px,3vw,48px)] w-[clamp(42px,4vw,64px)] shrink-0 items-center justify-center overflow-hidden rounded-tr-2xl rounded-bl-2xl bg-white p-1">
                      <img
                        src={team.teamLogo}
                        alt={team.teamName}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <span className="truncate text-[clamp(1.5rem,2vw,1.875rem)] font-semibold text-white uppercase">
                      {team.teamName}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="rounded-tl-2xl rounded-br-2xl bg-black px-6">
                    <div className="grid h-full grid-cols-8 items-center text-center text-[clamp(1.5rem,2vw,1.875rem)] font-semibold text-white">
                      <span>{team.played}</span>
                      <span>{team.won}</span>
                      <span>{team.drawn}</span>
                      <span>{team.lost}</span>
                      <span>{team.goalsFor}</span>
                      <span>{team.goalsAgainst}</span>
                      <span>{team.goalDifference}</span>

                      <span className="font-bold text-[#D2A639]">
                        {team.points}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex h-8 items-center justify-end">
          <div className="px-36 text-3xl font-semibold text-white">
            {organizerName}
          </div>
        </div>
      </div>
    </OverlayLayout>
  )
}
