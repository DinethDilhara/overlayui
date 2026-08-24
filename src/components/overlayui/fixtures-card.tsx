import OverlayLayout from "@/components/overlayui/full-screen-card"
import superLeagueLogo from "@/assets/ ssl.png"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"

const DEFAULT_TEAM_LOGOS = [team01Logo, team02Logo]

export interface FixturesTableRow {
  matchNumber: number

  date: string
  month: string

  time: string

  homeTeamLogo: string
  homeTeamName: string

  awayTeamLogo: string
  awayTeamName: string
}

const FIXTURES_TABLE_ROWS: FixturesTableRow[] = [
  {
    matchNumber: 1,
    date: "11",
    month: "JUL",
    time: "16:00",

    homeTeamLogo: DEFAULT_TEAM_LOGOS[0],
    homeTeamName: "NEW YOUNGERS",

    awayTeamLogo: DEFAULT_TEAM_LOGOS[1],
    awayTeamName: "BLUE STAR SC",
  },
  {
    matchNumber: 2,
    date: "12",
    month: "JUL",
    time: "16:00",

    homeTeamLogo: DEFAULT_TEAM_LOGOS[1],
    homeTeamName: "COLOMBO FC",

    awayTeamLogo: DEFAULT_TEAM_LOGOS[0],
    awayTeamName: "DEFENDERS FC",
  },
  {
    matchNumber: 3,
    date: "17",
    month: "JUL",
    time: "16:00",

    homeTeamLogo: DEFAULT_TEAM_LOGOS[0],
    homeTeamName: "BLUE STAR SC",

    awayTeamLogo: DEFAULT_TEAM_LOGOS[1],
    awayTeamName: "UPCOUNTRY LIONS",
  },
  {
    matchNumber: 4,
    date: "18",
    month: "JUL",
    time: "16:00",

    homeTeamLogo: DEFAULT_TEAM_LOGOS[1],
    homeTeamName: "RENOWN SC",

    awayTeamLogo: DEFAULT_TEAM_LOGOS[0],
    awayTeamName: "RATNAM SC",
  },
  {
    matchNumber: 5,
    date: "20",
    month: "JUL",
    time: "16:00",

    homeTeamLogo: DEFAULT_TEAM_LOGOS[0],
    homeTeamName: "SEA HAWKS FC",

    awayTeamLogo: DEFAULT_TEAM_LOGOS[1],
    awayTeamName: "RED STAR FC",
  },
]

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

export interface FixturesCardProps {
  tournamentLogo?: string
  tournamentName?: string
  organizerName?: string
  title?: string
  weekNumber?: string
  fixturesTableRows?: FixturesTableRow[]
}

export default function FixturesCard({
  tournamentLogo,
  tournamentName = "SUPER LEAGUE 2026",
  organizerName = "FOOTBALL SRI LANKA",
  title = "FIXTURES",
  weekNumber = "WEEK 1",
  fixturesTableRows = FIXTURES_TABLE_ROWS,
}: FixturesCardProps) {
  const logoBlack = "#0D0D0D"

  const rowCount = fixturesTableRows.length

  // Dynamic gap based on number of fixture rows
  const rowGap = Math.max(4, Math.min(28, 120 / rowCount))

  // Dynamic text size based on row count
  const rowTextSize =
    rowCount <= 4
      ? "clamp(1.7rem, 2.4vw, 2.4rem)"
      : rowCount <= 7
        ? "clamp(1.4rem, 2vw, 2rem)"
        : "clamp(1rem, 1.5vw, 1.5rem)"

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
            <div className="mb-2 grid grid-cols-[clamp(110px,7vw,140px)_clamp(170px,12vw,230px)_clamp(140px,9vw,180px)_1fr] gap-6">
              {/* Match No */}
              <div className="flex h-20 items-center justify-center rounded-tl-2xl rounded-br-2xl bg-[#921E23] text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-white">
                M. NO
              </div>

              {/* Date */}
              <div className="flex h-20 items-center justify-center rounded-tl-2xl rounded-br-2xl bg-[#921E23] text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-white">
                DATE
              </div>

              {/* Time */}
              <div className="flex h-20 items-center justify-center rounded-tl-2xl rounded-br-2xl bg-[#921E23] text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-white">
                TIME
              </div>

              {/* Match */}
              <div className="flex h-20 items-center justify-center rounded-tl-2xl rounded-br-2xl bg-[#921E23] text-[clamp(1.5rem,2vw,1.875rem)] font-bold text-white">
                MATCH
              </div>
            </div>

            {/* TABLE ROWS */}
            <div
              className="grid min-h-0 flex-1 overflow-hidden"
              style={{
                gap: `${rowGap}px`,
                gridTemplateRows: `repeat(${fixturesTableRows.length}, minmax(0, 1fr))`,
              }}
            >
              {fixturesTableRows.map((match) => (
                <div
                  key={match.matchNumber}
                  className="grid grid-cols-[clamp(110px,7vw,140px)_clamp(170px,12vw,230px)_clamp(140px,9vw,180px)_1fr] gap-6"
                >
                  {/* MATCH NUMBER */}
                  <div
                    className="flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-black font-bold text-white"
                    style={{
                      fontSize: rowTextSize,
                    }}
                  >
                    {match.matchNumber}
                  </div>

                  {/* DATE */}
                  <div
                    className="flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-black font-semibold text-white uppercase"
                    style={{
                      fontSize: rowTextSize,
                    }}
                  >
                    {match.date} - {match.month}
                  </div>

                  {/* TIME */}
                  <div
                    className="flex items-center justify-center rounded-tl-2xl rounded-br-2xl bg-black font-semibold text-white"
                    style={{
                      fontSize: rowTextSize,
                    }}
                  >
                    {match.time}
                  </div>

                  {/* MATCH */}
                  <div className="flex items-center justify-between rounded-tl-2xl rounded-br-2xl bg-black px-[clamp(1rem,1.5vw,2rem)]">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-[clamp(32px,3vw,48px)] w-[clamp(42px,4vw,64px)] shrink-0 items-center justify-center overflow-hidden rounded-tr-2xl rounded-bl-2xl bg-white p-1">
                        <img
                          src={match.homeTeamLogo}
                          alt={match.homeTeamName}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <span
                        className="truncate font-semibold text-white uppercase"
                        style={{
                          fontSize: rowTextSize,
                        }}
                      >
                        {match.homeTeamName}
                      </span>
                    </div>

                    <div className="mx-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0775B1]/70 text-xl font-semibold text-white backdrop-blur-md">
                      VS
                    </div>

                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className="truncate font-semibold text-white uppercase"
                        style={{
                          fontSize: rowTextSize,
                        }}
                      >
                        {match.awayTeamName}
                      </span>

                      <div className="flex h-[clamp(32px,3vw,48px)] w-[clamp(42px,4vw,64px)] shrink-0 items-center justify-center overflow-hidden rounded-tr-2xl rounded-bl-2xl bg-white p-1">
                        <img
                          src={match.awayTeamLogo}
                          alt={match.awayTeamName}
                          className="h-full w-full object-contain"
                        />
                      </div>
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
