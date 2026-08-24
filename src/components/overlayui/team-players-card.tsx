import OverlayLayout from "@/components/overlayui/full-screen-card"
import FullGround from "@/components/overlayui/full-ground"

export interface Player {
  number: number | string
  name: string
}

export interface TeamPlayersCardProps {
  tournamentLogo?: string
  teamLogo?: string
  teamName?: string
  headCoachName?: string
  captainImage?: string
  players?: Player[]
}

const DEFAULT_PLAYERS: Player[] = [
  { number: 1, name: "MOHAMED HASAN" },
  { number: 4, name: "MOHAMED RIZNI" },
  { number: 5, name: "MOHAMED MUSHFIR" },
  { number: 6, name: "FAREEQ AHAMED" },
  { number: 7, name: "MOHAMED ASHATH" },
  { number: 8, name: "AMAN FAIZER" },
  { number: 12, name: "ABDULLA RASHEED" },
  { number: 14, name: "MOHAMED MUJEEB" },
  { number: 18, name: "ABDELFATTAH AHMED" },
  { number: 23, name: "KAMEEL HAKEEM" },
  { number: 66, name: "NADEEM AHMAD" },
]

export default function TeamPlayersCard({
  tournamentLogo = "/tournament-logo.png",
  teamLogo = "/team-logo.png",
  teamName = "RENOWN FC",
  headCoachName = "FAZLUR RAHUMAN",
  captainImage = "/captain-cutout.png",
  players = DEFAULT_PLAYERS,
}: TeamPlayersCardProps) {
  const logoBlack = "#0D0D0D"

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

          {/* Team */}
          <div className="relative flex items-center justify-center rounded-3xl bg-black px-6 shadow-2xl">
            {/* Team Logo */}
            <div className="absolute left-[25%] -ml-12 flex h-[3.5vw] min-h-10 w-[4.5vw] min-w-12 items-center justify-center overflow-hidden rounded-tr-[12px] rounded-bl-[12px] bg-white p-1 shadow-sm">
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

            {/* Team Name */}
            <span className="text-6xl font-bold text-white">{teamName}</span>
          </div>
        </div>

        {/* BODY */}
        <div className="grid flex-1 grid-cols-[0.25fr_1fr] gap-2 pb-8">
          {/* LEFT */}
          <div className="grid grid-rows-[1fr_0.5fr] border border-white/50 rounded-3xl bg-[#3B3B3B] shadow-2xl">
            {/* Ground */}
            <div className="flex items-start justify-center">
              <div className="relative mt-30 aspect-2/3 h-[82%]">
                <FullGround />
              </div>
            </div>

            {/* Coach */}
            <div className="mt-12 flex flex-col items-center justify-center text-white">
              <span className="text-3xl leading-none font-semibold uppercase">
                {headCoachName.split(" ")[0]}
              </span>

              <span className="text-3xl leading-none font-semibold uppercase">
                {headCoachName.split(" ").slice(1).join(" ")}
              </span>

              <span className="mt-1 text-2xl font-semibold text-[#D2A639] uppercase">
                Head Coach
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-[1fr_1.5fr] border border-white/50 rounded-3xl bg-[#3B3B3B] shadow-2xl">
            {/* Player List */}
            <div className="flex flex-col justify-center gap-[0.1vw] px-[2vw] py-4 text-white">
              {players.map((player) => (
                <div
                  key={player.number}
                  className="flex items-center text-[clamp(1.25rem,2vw,3rem)] font-semibold uppercase"
                >
                  {/* Number */}
                  <span className="w-[3vw] min-w-10 text-right text-[#D2A639]">
                    {player.number}
                  </span>
                  {/* Space */}
                  <span className="mx-[0.8vw]" />
                  {/* Name */}
                  <span className="whitespace-nowrap">{player.name}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex items-center justify-center rounded-r-3xl bg-[#2d2d2d]">
              <img
                src={captainImage}
                alt="Coach"
                className="h-full w-full rounded-r-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </OverlayLayout>
  )
}
