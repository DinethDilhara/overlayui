import type { ReactNode } from "react"

export interface ScoreboardLowerThirdProps {
  matchTimer?: string
  homeTeamName: string
  homeTeamLogo?: ReactNode | string
  homeTeamScore: number | string
  awayTeamName: string
  awayTeamLogo?: ReactNode | string
  awayTeamScore: number | string
  tournamentLogo?: ReactNode | string
  organizerName?: string
}

export default function ScoreboardLowerThird({
  matchTimer = "00:00",
  homeTeamName,
  homeTeamLogo,
  homeTeamScore = 0,
  awayTeamName,
  awayTeamLogo,
  awayTeamScore = 0,
  tournamentLogo,
  organizerName = "Football Sri Lanka",
}: ScoreboardLowerThirdProps) {
  const green = "#257723"
  const blue = "#0775B1"
  const red = "#921E23"
  const yellow = "#D2A639"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center">
        {/* TIMER */}
        <div className="mb-4 rounded-lg border border-zinc-200 bg-white px-4 py-1 shadow-md">
          <span className="text-[1.4vw] font-semibold text-black">
            {matchTimer}
          </span>
        </div>

        {/* OUTER PATTERN BACKGROUND */}
        <div
          className="relative flex h-[5vw] min-h-18.75 w-[65vw] min-w-250 items-center rounded-3xl p-[0.4vw] shadow-2xl"
          style={{
            background: `
              linear-gradient(
                to right,
                ${green} 0%,
                ${green} 20%,
                ${blue} 20%,
                ${blue} 80%,
                ${red} 80%,
                ${red} 100%
              )
            `,
          }}
        >
          {/* CONNECTED BLACK TEAM BAR */}
          <div className="flex h-full w-full items-center rounded-3xl bg-black px-[1vw]">
            {/* HOME */}
            <div className="flex flex-1 items-center gap-[1vw]">
              <div className="flex h-[2.5vw] min-h-10 w-[3.5vw] min-w-13.75 items-center justify-center rounded-tr-xl rounded-bl-xl bg-white p-1">
                {typeof homeTeamLogo === "string" ? (
                  <img
                    src={homeTeamLogo}
                    alt={homeTeamName}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  homeTeamLogo
                )}
              </div>

              <span className="flex-1 text-center text-[1.6vw] font-black tracking-wide text-white uppercase">
                {homeTeamName}
              </span>
            </div>

            {/* CENTER GAP */}
            <div className="w-[14vw] min-w-55" />

            {/* AWAY */}
            <div className="flex flex-1 items-center gap-[1vw]">
              <span className="flex-1 text-center text-[1.6vw] font-black tracking-wide text-white uppercase">
                {awayTeamName}
              </span>

              <div className="flex h-[2.5vw] min-h-10 w-[3.5vw] min-w-13.75 items-center justify-center rounded-tr-xl rounded-bl-xl bg-white p-1">
                {typeof awayTeamLogo === "string" ? (
                  <img
                    src={awayTeamLogo}
                    alt={awayTeamName}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  awayTeamLogo
                )}
              </div>
            </div>
          </div>

          {/* FLOATING YELLOW SCORE CARD */}
          <div
            className="absolute top-1/2 left-1/2 z-20 flex h-[5vw] min-h-17.5 w-[14vw] min-w-55 -translate-x-1/2 -translate-y-1/2 items-center justify-between rounded-2xl px-8 shadow-xl"
            style={{
              backgroundColor: yellow,
            }}
          >
            <span className="text-[3vw] font-semibold text-black">
              {homeTeamScore}
            </span>

            {/* TOURNAMENT LOGO */}
            <div className="absolute top-1/2 left-1/2 flex h-[5.6vw] min-h-23.75 w-[4vw] min-w-16.25 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-zinc-700 bg-black p-1 shadow-xl">
              {typeof tournamentLogo === "string" ? (
                <img
                  src={tournamentLogo}
                  alt="Tournament"
                  className="h-full w-full object-contain"
                />
              ) : (
                tournamentLogo
              )}
            </div>

            <span className="text-[3vw] font-semibold text-black">
              {awayTeamScore}
            </span>
          </div>
        </div>

        {/* ORGANIZER */}
        {organizerName && (
          <div
            className="rounded-b-xl bg-red-700 px-8 py-2 shadow-md"
          >
            <span className="text-[0.9vw] font-bold  text-white uppercase">
              {organizerName}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
