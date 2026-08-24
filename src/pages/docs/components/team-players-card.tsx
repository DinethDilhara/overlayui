import { Link } from "react-router"
import TeamPlayersCard from "@/components/overlayui/08.team-players-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import playerImgOne from "@/assets/player-1-img.png"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import TeamPlayersCard from "@/components/overlayui/08.team-players-card"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import playerImgOne from "@/assets/player-1-img.png"

export default function TeamPlayersCardDemo() {
  return (
    <TeamPlayersCard
      tournamentLogo={wcLogo}
      teamLogo={team01Logo}
      teamName="RENOWN FC"
      headCoachName="FAZLUR RAHUMAN"
      captainImage={playerImgOne}
    />
  )
}`

const PROPS = [
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
  { name: "teamLogo", type: "string", required: true, description: "Club emblem / team badge." },
  { name: "teamName", type: "string", required: true, description: "Full team name (e.g., 'RENOWN FC')." },
  { name: "headCoachName", type: "string", required: true, description: "Head coach name." },
  { name: "captainImage", type: "string", required: true, description: "Captain / star player cutout portrait photo." },
  { name: "players", type: "Player[]", required: false, description: "List of starting XI players with jersey numbers and names." },
]

export default function TeamPlayersCardDocsPage() {
  const { prev, next } = getAdjacentComponents("team-players-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="team-players-card" />
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/50 px-3 py-0.5 text-xs font-medium text-muted-foreground mb-3">
          <span>Components</span>
          <span>·</span>
          <span>Teams & Lineups</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Team Players Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Starting XI player lineup card featuring team badges, starting squad names, head coach, and captain portrait.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <TeamPlayersCard
            tournamentLogo={wcLogo}
            teamLogo={team01Logo}
            teamName="RENOWN FC"
            headCoachName="FAZLUR RAHUMAN"
            captainImage={playerImgOne}
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="team-players-card.tsx"
          language="tsx"
        />
      </div>

      <PropsTable props={PROPS} />

      <div className="pt-6 border-t border-border/40 flex items-center justify-between">
        {prev ? (
          <Link
            to={prev.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            <span>{prev.title}</span>
          </Link>
        ) : <div />}

        {next && (
          <Link
            to={next.href}
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            <span>{next.title}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        )}
      </div>
    </div>
  )
}
