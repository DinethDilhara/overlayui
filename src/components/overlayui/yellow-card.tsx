import type { ReactNode } from "react"

export interface YellowCardOverlayProps {
  teamLogo?: ReactNode | string
  playerNumber: string | number
  playerName: string
  tournamentLogo?: ReactNode | string
}

export default function YellowCardOverlay({
  teamLogo,
  playerNumber,
  playerName,
  tournamentLogo,
}: YellowCardOverlayProps) {
  const green = "#257723"
  const red = "#921E23"
  const blue = "#0775B1"
  const yellow = "#D2A639"
  const darkGrey = "#454545"
  const logoBlack = "#0D0D0D"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      {/* Lower Third Anchor Container */}
      <div className="absolute bottom-12 left-24 flex items-end gap-[0.8vw] font-sans">
        {/* MAIN OVERLAY CONTAINER */}
        <div
          className="relative flex w-[34vw] max-w-225 min-w-145 flex-col overflow-hidden rounded-xl shadow-2xl"
          style={{
            backgroundColor: darkGrey,
          }}
        >
          {/* TOP SECTION */}
          <div className="relative flex h-[5vw] max-h-30 min-h-22 w-full overflow-hidden rounded-xl">
            {/* Gradient Background */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(
                  to right,
                  ${green} 0%, 
                  ${green} 20%, 
                  ${yellow} 20%, 
                  ${yellow} 40%, 
                  ${blue} 40%, 
                  ${blue} 60%, 
                  ${red} 60%, 
                  ${red} 80%, 
                  ${green} 80%, 
                  ${green} 100%
                )`,
              }}
            />

            {/* Inner Black Content */}
            <div className="absolute inset-[0.6vw] z-10 flex items-center justify-between rounded-xl bg-black px-[0.8vw]">
              {/* Left Content */}
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

                {/* Player Name */}
                <span className="pl-12 text-[1.9vw] font-semibold tracking-wide text-white uppercase drop-shadow-md">
                  {playerNumber}
                  &nbsp;&nbsp;&nbsp;
                  {playerName}
                </span>
              </div>

              {/* Yellow Card */}
              <div className="rder-yellow-300 flex h-[2.5vw] min-h-8 w-[1.5vw] min-w-8 items-center justify-center bg-[#EAB308] shadow-md"></div>
            </div>
          </div>

          {/* Bottom Label */}
          <div
            className="flex h-[2.5vw] min-h-7 items-center justify-center text-[1.5vw] text-white/90 uppercase shadow-inner"
            style={{
              backgroundColor: darkGrey,
            }}
          >
            YELLOW CARD
          </div>
        </div>

        {/* Tournament Logo */}
        <div 
          className="mb-16 flex h-[2.5vw] min-h-14 w-[1vw] min-w-14 items-center justify-center overflow-hidden rounded-2xl shadow-xl"
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
