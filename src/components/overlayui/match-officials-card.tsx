import type { ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  WhistleIcon,
  Flag03Icon,
  FourCircleIcon,
} from "@hugeicons/core-free-icons"

export interface MatchOfficialsCardProps {
  title?: string
  referee: string
  assistantReferee1: string
  assistantReferee2: string
  fourthOfficial: string
  refereeColor?: string
  tournamentLogo?: ReactNode | string
}

export default function MatchOfficialsCard({
  title = "MATCH OFFICIALS",
  referee,
  assistantReferee1,
  assistantReferee2,
  fourthOfficial,
  refereeColor = "#7ED8FF",
  tournamentLogo,
}: MatchOfficialsCardProps) {
  const green = "#257723"
  const red = "#921E23"
  const yellow = "#D2A639"
  const blue = "#0775B1"

  const darkGrey = "#3A3A3A"
  const logoBlack = "#0D0D0D"

  const officials = [
    {
      icon: WhistleIcon,
      name: referee,
      color: refereeColor,
    },
    {
      icon: Flag03Icon,
      name: assistantReferee1,
      color: "#FFFFFF",
    },
    {
      icon: Flag03Icon,
      name: assistantReferee2,
      color: "#FFFFFF",
    },
    {
      icon: FourCircleIcon,
      name: fourthOfficial,
      color: "#FFFFFF",
    },
  ]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      {/* LOWER THIRD */}
      <div className="absolute bottom-14 left-1/2 flex -translate-x-1/2 items-center gap-5 font-sans">
        {/* TOURNAMENT LOGO */}
        <div
          className="flex h-[5vw] min-h-20 w-[2.5vw] min-w-20 items-center justify-center overflow-hidden rounded-3xl shadow-2xl"
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

        {/* MAIN CARD */}
        <div className="relative flex w-[32vw] max-w-180 min-w-130 flex-col overflow-hidden rounded-3xl p-[0.6vw] shadow-2xl">
          {/* BACKGROUND */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* TOP HALF */}
            <div
              className="absolute top-0 left-0 h-2/3 w-full"
              style={{ backgroundColor: green }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: red,
                  clipPath: "polygon(90% 0%, 100% 0%, 100% 100%, 70% 100%)",
                }}
              />
            </div>

            {/* BOTTOM HALF */}
            <div
              className="absolute bottom-0 left-0 h-1/3 w-full"
              style={{ backgroundColor: blue }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: yellow,
                  clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 60% 100%)",
                }}
              />
            </div>
          </div>

          {/* FOREGROUND */}
          <div className="relative z-10 flex flex-col">
            {/* HEADER */}
            <div className="flex h-[2.4vw] min-h-10 items-center justify-center">
              <span className="text-[2vw] font-black text-white uppercase">
                {title}
              </span>
            </div>

            {/* GREY PANEL */}
            <div
              className="overflow-hidden rounded-b-2xl border border-white/30 px-[1.2vw] py-[1vw] shadow-inner"
              style={{
                backgroundColor: darkGrey,
              }}
            >
              <div className="space-y-[0.3vw]">
                {officials.map((official, index) => (
                  <div
                    key={index}
                    className="flex h-[2.4vw] min-h-11 items-center gap-[3vw]"
                  >
                    <HugeiconsIcon
                      icon={official.icon}
                      size={36}
                      color={official.color}
                    />

                    <span
                      className="text-[1.6vw] font-bold tracking-wide uppercase"
                      style={{
                        color: official.color,
                      }}
                    >
                      {official.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
