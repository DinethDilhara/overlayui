import type { ReactNode } from "react"

export interface ScoreBugExtraTimeCardProps {
  matchTimer?: string
  extraTime?: string
  extraTimer?: string

  tournamentName?: string
  tournamentLogo?: ReactNode | string

  homeTeamShortName: string
  homeTeamLogo?: ReactNode | string
  homeTeamScore: number | string
  homeTeamJerseyColor?: string

  awayTeamShortName: string
  awayTeamLogo?: ReactNode | string
  awayTeamScore: number | string
  awayTeamJerseyColor?: string
}

export default function ScoreBugExtraTimeCard({
  matchTimer = "00:00",
  extraTime,
  extraTimer = "00:00",

  tournamentName,
  tournamentLogo,

  homeTeamShortName,
  homeTeamLogo,
  homeTeamScore,
  homeTeamJerseyColor = "#ffffff",

  awayTeamShortName,
  awayTeamLogo,
  awayTeamScore,
  awayTeamJerseyColor = "#ffffff",
}: ScoreBugExtraTimeCardProps) {
  const green = "#257723"
  const blue = "#0775B1"
  const red = "#921E23"
  const yellow = "#D2A639"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      <div className="absolute top-16 left-24 flex flex-col items-center">
        {/* TOURNAMENT NAME */}
        {tournamentName && (
          <div
            className="relative -left-10 flex w-75 justify-center rounded-t-xl px-3"
            style={{
              background: "#4B4B4B",
            }}
          >
            <span className="text-xl font-medium text-amber-50 uppercase">
              {tournamentName}
            </span>
          </div>
        )}

        <div className="flex items-start">
          {/* MAIN SCORE BUG */}
          <div
            className="relative z-50 flex h-[3vw] w-125 items-center rounded-lg border border-zinc-700 p-[0.2vw] shadow-xl"
            style={{
              background: `
              linear-gradient(
                to right,
                ${red} 0%,
                ${red} 20%,
                ${blue} 20%,
                ${blue} 80%,
                ${green} 80%,
                ${green} 100%
              )
              `,
            }}
          >
            {/* INNER BLACK */}
            <div className="flex h-full w-full items-center rounded-lg bg-black px-3">
              {/* HOME */}
              <div className="flex flex-1 items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tr-[12px] rounded-bl-[12px] bg-white p-1">
                  {typeof homeTeamLogo === "string" ? (
                    <img
                      src={homeTeamLogo}
                      alt={homeTeamShortName}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    homeTeamLogo
                  )}
                </div>

                <div className="flex flex-1 items-center justify-center gap-4">
                  <div
                    className="h-5 w-5 rounded-full"
                    style={{
                      backgroundColor: homeTeamJerseyColor,
                    }}
                  />

                  <span className="text-2xl font-bold tracking-wider text-white uppercase">
                    {homeTeamShortName}
                  </span>
                </div>
              </div>

              {/* SCORE SPACE */}
              <div className="w-36 shrink-0" />

              {/* AWAY */}
              <div className="flex flex-1 items-center">
                <div className="flex flex-1 items-center justify-center gap-4">
                  <span className="text-2xl font-bold tracking-wider text-white uppercase">
                    {awayTeamShortName}
                  </span>

                  <div
                    className="h-5 w-5 rounded-full"
                    style={{
                      backgroundColor: awayTeamJerseyColor,
                    }}
                  />
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tr-[12px] rounded-bl-[12px] bg-white p-1">
                  {typeof awayTeamLogo === "string" ? (
                    <img
                      src={awayTeamLogo}
                      alt={awayTeamShortName}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    awayTeamLogo
                  )}
                </div>
              </div>
            </div>

            {/* SCORE PANEL */}
            <div
              className="absolute top-1/2 left-1/2 z-20 flex h-[3vw] w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-between rounded-xl px-4 shadow-xl"
              style={{
                background: yellow,
              }}
            >
              <span className="text-3xl font-black text-black">
                {homeTeamScore}
              </span>

              <div className="absolute top-1/2 left-1/2 flex h-[3.6vw] w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-zinc-700 bg-black p-1">
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

              <span className="text-3xl font-black text-black">
                {awayTeamScore}
              </span>
            </div>
          </div>

          {/* TIMER STACK */}
          <div className="relative z-30 -ml-2 flex flex-col">
            {/* TIMER ROW */}
            <div className="relative flex items-center">
              {/* RED EXTRA TIME BACKGROUND */}
              {extraTime && (
                <div
                  className="absolute top-0 left-14 flex h-[3vw] min-w-18 items-center justify-center rounded-r-lg border border-zinc-700"
                  style={{
                    background: red,
                  }}
                >
                  <span className="pl-6 text-xl font-bold text-white">
                    +{extraTime}
                  </span>
                </div>
              )}

              {/* WHITE MATCH TIMER */}
              <div className="relative z-20 flex h-[3vw] min-w-22 items-center justify-center rounded-r-lg border border-zinc-700 bg-white shadow-xl">
                <span className="text-xl font-semibold text-black tabular-nums">
                  {matchTimer}
                </span>
              </div>
            </div>

            {/* BLACK EXTRA TIMER */}
            {extraTimer && (
              <div className="flex h-[2vw] min-w-18 items-center justify-center rounded-b-lg bg-black">
                <span className="text-xl font-semibold text-white tabular-nums">
                  {extraTimer}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
