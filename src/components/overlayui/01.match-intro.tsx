import OverlayLayout from "@/components/overlayui/ui/full-screen-card"

export interface MatchIntroProps {
  teamOneName: string
  teamTwoName: string
  teamOneLogo: string
  teamTwoLogo: string
  tournamentLogo: string
  organizerName: string
  week?: string
  match?: string
}

export function MatchIntro({
  teamOneName,
  teamTwoName,
  teamOneLogo,
  teamTwoLogo,
  tournamentLogo,
  organizerName,
  week,
  match,
}: MatchIntroProps) {
  return (
    <OverlayLayout>
      <div className="flex h-full w-full flex-col gap-3 px-3 p-3 pb-2">
        {/* Team Names */}
        <div className="grid h-24 grid-cols-2 gap-2">
          <div className="flex items-center justify-center rounded-3xl bg-[#232323] text-6xl font-bold text-white shadow-2xl">
            {teamOneName}
          </div>

          <div className="flex items-center justify-center rounded-3xl bg-[#232323] text-6xl font-bold text-white shadow-2xl">
            {teamTwoName}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid flex-1 grid-cols-[1.4fr_0.8fr_1.4fr] gap-6 rounded-3xl bg-[#232323] shadow-2xl">
          {/* Home Team Logo */}
          <div className="flex items-center justify-center">
            <div className="flex h-[60%] w-[85%] items-center justify-center rounded-tr-[90px] rounded-bl-[90px] bg-white">
              <img
                src={teamOneLogo}
                alt="Home Team"
                className="h-76 object-contain"
              />
            </div>
          </div>

          {/* Tournament */}
          <div className="flex flex-col">
            <div className="flex flex-1 items-start justify-center">
              <img
                src={tournamentLogo}
                alt="Tournament"
                className="h-100 object-contain"
              />
            </div>

            <div className="flex flex-col items-center justify-end p-6 text-white">
              <p className="mt-6 text-5xl font-semibold">{week}</p>
              <p className="text-5xl font-semibold">{match}</p>
            </div>
          </div>

          {/* Away Team Logo */}
          <div className="flex items-center justify-center">
            <div className="flex h-[60%] w-[85%] items-center justify-center rounded-tr-[90px] rounded-bl-[90px] bg-white">
              <img
                src={teamTwoLogo}
                alt="Away Team"
                className="h-76 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Organisation Name */}
        <div className="flex h-8 items-center justify-end">
          <div className="px-36 text-3xl font-semibold text-white">
            {organizerName}
          </div>
        </div>
      </div>
    </OverlayLayout>
  )
}