import type { ReactNode } from "react"

interface SubstitutesInCardProps {
  teamLogo?: ReactNode | string
  playerNumber: string | number
  playerName: string
  title?: string
  tournamentLogo?: ReactNode | string
}

export default function SubstitutesInCard({
  teamLogo,
  playerNumber,
  playerName,
  title = "SUBSTITUTION",
  tournamentLogo,
}: SubstitutesInCardProps) {
  const green = "#257723"
  const red = "#921E23"
  const yellow = "#D2A639"
  const darkGrey = "#3A3A3A"
  const logoBlack = "#0D0D0D"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      <div className="absolute bottom-12 left-24 flex items-center gap-[0.8vw] font-sans">
        <div className="relative flex w-[24vw] max-w-180 min-w-120 flex-col overflow-hidden rounded-2xl p-[0.3vw] shadow-2xl">
          <div
            className="absolute inset-0 z-0 overflow-hidden"
            style={{ backgroundColor: green }}
          >
            <div
              className="absolute h-full w-[55%]"
              style={{
                backgroundColor: yellow,
                transform: "skewX(-29deg)",
                left: "15%",
              }}
            />
            <div
              className="absolute h-full w-[30%]"
              style={{
                backgroundColor: red,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                left: "62.4%",
              }}
            />
          </div>

          <div className="relative z-10 flex h-full w-full flex-col">
            <div className="flex h-[1.4vw] max-h-16 min-h-10 w-full items-center justify-center">
              <span className="text-[1.6vw] font-bold tracking-wider text-white uppercase drop-shadow-md">
                {title}
              </span>
            </div>

            {/* PLAYER PANEL */}
            <div
              className="relative flex h-[3.8vw] max-h-30 min-h-20 w-full items-center justify-between rounded-br-2xl rounded-bl-2xl border border-white/40 px-[0.8vw] shadow-inner"
              style={{
                backgroundColor: darkGrey,
              }}
            >
              {/* Player Info */}
              <div className="flex items-center gap-[0.8vw]">
                {/* Team Logo */}
                <div className="flex h-[2.5vw] min-h-10 w-[3.5vw] min-w-12 items-center justify-center overflow-hidden rounded-tr-[12px] rounded-bl-[12px] bg-white p-1 shadow-sm">
                  {typeof teamLogo === "string" ? (
                    <img
                      src={teamLogo}
                      alt="Team Logo"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    teamLogo
                  )}
                </div>

                {/* Player */}
                <span className="text-[1.4vw] font-semibold text-white uppercase drop-shadow-md">
                  {playerNumber}
                  &nbsp;&nbsp;
                  {playerName}
                </span>
              </div>

              {/* Substitution Arrow */}
              <div className="flex h-[2.5vw] min-h-8 w-[2.5vw] min-w-8 items-center justify-center">
                <div
                  className="h-[2vw] w-[2vw]"
                  style={{
                    backgroundColor: "#72C344",
                    clipPath: "polygon(0 0, 100% 50%, 0 100%, 0% 50%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* TOURNAMENT LOGO */}
        <div
          className="flex h-[3.8vw] min-h-14 w-[3.8vw] min-w-14 items-center justify-center self-center overflow-hidden rounded-2xl shadow-xl"
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
    </div>
  )
}
