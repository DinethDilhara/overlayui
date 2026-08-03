import OverlayLayout from "@/components/overlayui/ui/full-screen-card"
import HalfGround from "@/components/overlayui/ui/half-ground"

export interface Player {
  number: number | string
  name: string
}

export interface TeamFormationCardProps {
  tournamentLogo?: string
  teamLogo?: string
  teamName?: string
  headCoachName?: string

  players?: Player[]
  formationType?: string
}

// const DEFAULT_PLAYERS: Player[] = [
//   { number: 1, name: "MOHAMED HASAN" },
//   { number: 4, name: "MOHAMED RIZNI" },
//   { number: 5, name: "MOHAMED MUSHFIR" },
//   { number: 6, name: "FAREEQ AHAMED" },
//   { number: 7, name: "MOHAMED ASHATH" },
//   { number: 8, name: "AMAN FAIZER" },
//   { number: 12, name: "ABDULLA RASHEED" },
//   { number: 14, name: "MOHAMED MUJEEB" },
//   { number: 18, name: "ABDELFATTAH AHMED" },
//   { number: 23, name: "KAMEEL HAKEEM" },
//   { number: 66, name: "NADEEM AHMAD" },
// ]

const SUBSTITUTES_PLAYERS: Player[] = [
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

export default function TeamFormationCard({
  tournamentLogo = "/tournament-logo.png",
  teamLogo = "/team-logo.png",
  teamName = "RENOWN FC",
  headCoachName = "FAZLUR RAHUMAN",
  players = SUBSTITUTES_PLAYERS,
  formationType = "4-3-3",
}: TeamFormationCardProps) {
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

            {/* Formation Type */}
            <span className="absolute right-8 text-4xl font-bold text-[#D2A639]">
              {formationType}
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className="grid flex-1 grid-cols-[0.4fr_1fr] gap-2 pt-2 pb-8">
          {/* LEFT */}
          <div className="grid grid-rows-[1fr_auto] rounded-3xl border border-white/50 bg-[#3B3B3B] shadow-2xl">
            {/* Substitutes Players Names */}
            <div className="flex flex-col px-8 pt-8 text-white">
              {/* Title */}
              <span className="mb-6 pl-6 text-3xl font-bold text-[#D2A639] uppercase">
                Substitutes
              </span>

              {/* Player List */}
              <div className="flex flex-col gap-2">
                {players.map((player) => (
                  <div
                    key={player.number}
                    className="flex items-center text-xl font-semibold uppercase"
                  >
                    {/* Number */}
                    <span className="w-10 text-right text-[#D2A639]">
                      {player.number}
                    </span>

                    {/* Space */}
                    <span className="mx-3" />

                    {/* Name */}
                    <span className="whitespace-nowrap">{player.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coach */}
            <div className="m-6 mt-12 flex flex-col items-end justify-end text-white">
              <span className="mt-1 text-2xl font-semibold text-[#D2A639] uppercase">
                Head Coach
              </span>

              <span className="text-2xl leading-none font-semibold uppercase">
                {headCoachName}
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/50 bg-[#3B3B3B] shadow-2xl">
            <HalfGround />
          </div>
        </div>
      </div>
    </OverlayLayout>
  )
}
