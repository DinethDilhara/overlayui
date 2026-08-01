import type { ReactNode } from "react"

export interface TimeBaseScoreCardProps {
  title?: string
  homeTeamName: string
  homeTeamLogo?: ReactNode | string
  homeTeamScore: number | string
  awayTeamName: string
  awayTeamLogo?: ReactNode | string
  awayTeamScore: number | string
  tournamentName: string
}

export default function TimeBaseScoreCard({
  title,
  homeTeamName,
  homeTeamLogo,
  homeTeamScore,
  awayTeamName,
  awayTeamLogo,
  awayTeamScore,
  tournamentName,
}: TimeBaseScoreCardProps) {
  const green = "#257723"
  const red = "#921E23"
  const yellow = "#D2A639"
  const darkGrey = "#3A3A3A"
  const scoreBadgeBg = "#42C0A5"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      {/* Centered at bottom-24 anchor container */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center font-sans">
        
        <div className="z-20 mb-3 rounded-2xl border-2 border-white/60 bg-white px-6 py-1 shadow-md">
          <span className="text-[1vw] font-extrabold tracking-wider text-black uppercase">
            {title}
          </span>
        </div>

        {/* MAIN CONTAINER: Base pattern container */}
        <div className="relative flex w-[32vw] max-w-180 min-w-130 flex-col overflow-hidden rounded-3xl p-[0.6vw] shadow-2xl">
          
          {/* BACKGROUND LAYER WITH YOUR EXACT PATTERN */}
          <div
            className="absolute inset-0 z-0 overflow-hidden"
            style={{ backgroundColor: green }}
          >
            <div
              className="absolute h-full w-[56.6%]"
              style={{
                backgroundColor: yellow,
                transform: "skewX(-25deg)",
                left: "15%",
              }}
            />
            <div
              className="absolute h-full w-[33%]"
              style={{
                backgroundColor: red,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                left: "62.9%",
              }}
            />
          </div>

          {/* FOREGROUND LAYOUT LAYER */}
          <div className="relative z-10 flex flex-col w-full">
            
            {/* TOP DIV: Grey Rounded Scores Container */}
            <div
              className="flex flex-col w-full divide-y divide-white/20 overflow-hidden rounded-2xl shadow-inner px-[1vw] py-[0.4vw]"
              style={{ backgroundColor: darkGrey }}
            >
              {/* Home Team Row */}
              <div className="flex h-[3.5vw] min-h-14 items-center justify-between py-1">
                <div className="flex items-center gap-[1vw]">
                  {/* Team Logo */}
                  <div className="flex h-[2.5vw] min-h-9.5 w-[3.5vw] min-w-12.5 items-center justify-center overflow-hidden rounded-tr-[12px] rounded-bl-[12px] bg-white p-1 shadow-sm">
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
                  {/* Team Name */}
                  <span className="text-[1.5vw] font-black tracking-wide text-white uppercase drop-shadow-sm">
                    {homeTeamName}
                  </span>
                </div>

                {/* Score Badge */}
                <div
                  className="flex h-[2.8vw] min-h-10 w-[2.8vw] min-w-10 items-center justify-center rounded-xl shadow-md"
                  style={{ backgroundColor: scoreBadgeBg }}
                >
                  <span className="text-[1.8vw] font-black text-black">
                    {homeTeamScore}
                  </span>
                </div>
              </div>

              {/* Away Team Row */}
              <div className="flex h-[3.5vw] min-h-14 items-center justify-between py-1">
                <div className="flex items-center gap-[1vw]">
                  {/* Team Logo */}
                  <div className="flex h-[2.5vw] min-h-9.5 w-[3.5vw] min-w-12.5 items-center justify-center overflow-hidden rounded-tr-[12px] rounded-bl-[12px] bg-white p-1 shadow-sm">
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
                  {/* Team Name */}
                  <span className="text-[1.5vw] font-black tracking-wide text-white uppercase drop-shadow-sm">
                    {awayTeamName}
                  </span>
                </div>

                {/* Score Badge */}
                <div
                  className="flex h-[2.8vw] min-h-10 w-[2.8vw] min-w-10 items-center justify-center rounded-xl shadow-md"
                  style={{ backgroundColor: scoreBadgeBg }}
                >
                  <span className="text-[1.8vw] font-black text-black">
                    {awayTeamScore}
                  </span>
                </div>
              </div>
            </div>

            {/* BOTTOM DIV: Tournament Name */}
            <div className="flex h-[2.2vw] min-h-8 w-full items-center justify-items-start gap-1 px-2">
              <span className="text-[1.2vw] font-semibold text-white uppercase drop-shadow-lg">
                {tournamentName}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}