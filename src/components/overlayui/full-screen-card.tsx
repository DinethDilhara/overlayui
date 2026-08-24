import type { ReactNode } from "react"

interface OverlayLayoutProps {
  children: ReactNode
}

export default function OverlayLayout({ children }: OverlayLayoutProps) {
  const green = "#257723"
  const red = "#921E23"
  const blue = "#0775B1"
  const yellow = "#D2A639"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-transparent">
      {/* Main Card */}
      <div className="absolute top-24 bottom-24 left-24 right-24 overflow-hidden rounded-3xl shadow-2xl">
        {/* Background Layer */}  
        <div className="absolute inset-0 z-0">
          {/* Top */}
          <div className="flex h-1/2">
            <div
              className="h-full w-[73%]"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${green},
                  #3a9635,
                  ${green}
                )`,
              }}
            />

            <div
              className="h-full w-[27%]"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${red},
                  #b52b32,
                  ${red}
                )`,
              }}
            />
          </div>

          {/* Bottom */}
          <div className="flex h-1/2">
            <div
              className="h-full w-[41.85%]"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${blue},
                  #1495d0,
                  ${blue}
                )`,
              }}
            />

            <div
              className="h-full w-[58.15%]"
              style={{
                background: `linear-gradient(
                  135deg,
                  ${yellow},
                  #e4c05a,
                  ${yellow}
                )`,
              }}
            />
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </div>
  )
}