import type { ReactNode } from "react"

export interface HydrationBreakBugProps {
  tournamentLogo?: ReactNode | string
}

export default function HydrationBreakBug({
  tournamentLogo,
}: HydrationBreakBugProps) {
  const green = "#257723"
  const red = "#921E23"
  const blue = "#0775B1"
  const yellow = "#D2A639"
  const logoBlack = "#0D0D0D"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      {/* Lower Third Anchor */}
      <div className="absolute bottom-12 left-24 flex items-end gap-[0.8vw] font-sans">
        {/* Main Banner */}
        <div className="relative flex h-[5vw] w-[24vw] max-w-105 min-w-[320px] items-center justify-center overflow-hidden rounded-xl shadow-2xl">
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

          {/* Black Panel */}
          <div className="absolute inset-[0.35vw] flex items-center justify-center rounded-xl bg-black">
            <span className="text-[1.9vw] font-bold text-white uppercase">
              HYDRATION BREAK
            </span>
          </div>
        </div>

        {/* Tournament Logo */}
        <div
          className="flex h-[3vw] min-h-14 w-[3vw] min-w-14 items-center justify-center self-center overflow-hidden rounded-2xl shadow-xl"
          style={{ backgroundColor: logoBlack }}
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
