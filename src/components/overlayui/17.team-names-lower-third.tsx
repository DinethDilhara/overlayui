import type { ReactNode } from "react"

export interface TeamsNamesLowerThirdProps {
  homeTeamName: string
  homeTeamLogo?: ReactNode | string
  awayTeamName: string
  awayTeamLogo?: ReactNode | string
  tournamentLogo?: ReactNode | string
  tournamentName: string
  tournamentYear: string | number
  venue: string
}

export default function TeamsNamesLowerThird({
  homeTeamName,
  homeTeamLogo,
  awayTeamName,
  awayTeamLogo,
  tournamentLogo,
  tournamentName,
  tournamentYear,
  venue,
}: TeamsNamesLowerThirdProps) {
  const green = "#257723"
  const blue = "#0775B1"
  const red = "#921E23"
  const yellow = "#D2A639"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center">
        {/* TOURNAMENT INFO CARD */}
        <div
          className="flex flex-col items-center rounded-t-2xl px-10 py-2 shadow-lg"
          style={{
            backgroundColor: "#4B4B4B",
          }}
        >
          <span
            className="text-[1.2vw] font-semibold uppercase"
            style={{
              color: yellow,
            }}
          >
            {tournamentName} {tournamentYear} - {venue}
          </span>
        </div>

        {/* OUTER PATTERN BACKGROUND */}
        <div
          className="relative flex h-[5.5vw] min-h-22.5 w-[68vw] min-w-261.5 items-center rounded-3xl p-[0.45vw] shadow-2xl"
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
          {/* CONNECTED BLACK BAR */}
          <div className="flex h-full w-full items-center rounded-3xl bg-black px-[1.2vw]">
            {/* HOME TEAM */}
            <div className="flex flex-1 items-center gap-[1.2vw]">
              <div className="flex h-[3vw] min-h-13.75 w-[4vw] min-w-17.5 items-center justify-center rounded-tr-xl rounded-bl-xl bg-white p-1.5 shadow-md">
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

              <span className="flex-1 text-center text-[1.9vw] font-black tracking-wide text-white uppercase">
                {homeTeamName}
              </span>
            </div>

            {/* CENTER SPACE */}
            <div className="w-[15vw] min-w-57.5" />

            {/* AWAY TEAM */}
            <div className="flex flex-1 items-center gap-[1.2vw]">
              <span className="flex-1 text-center text-[1.9vw] font-black tracking-wide text-white uppercase">
                {awayTeamName}
              </span>

              <div className="flex h-[3vw] min-h-13.75 w-[4vw] min-w-17.5 items-center justify-center rounded-tr-xl rounded-bl-xl bg-white p-1.5 shadow-md">
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

          {/* TOURNAMENT LOGO */}
          <div className="absolute top-1/2 left-1/2 flex h-[6.4vw] min-h-27.5 w-[5vw] min-w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-black p-2 shadow-xl">
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
        </div>
      </div>
    </div>
  )
}
