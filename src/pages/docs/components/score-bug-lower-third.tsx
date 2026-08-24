import { Link } from "react-router"
import ScoreboardOverlay from "@/components/overlayui/14.score-bug-lower-third"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import ScoreboardOverlay from "@/components/overlayui/14.score-bug-lower-third"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"

export default function ScoreBugLowerThirdDemo() {
  return (
    <ScoreboardOverlay
      matchTimer="43:10"
      homeTeamName="RENOWN FC"
      homeTeamLogo={team01Logo}
      homeTeamScore={0}
      awayTeamName="RATNAM SC"
      awayTeamLogo={team02Logo}
      awayTeamScore={0}
      tournamentLogo={wcLogo}
      organizerName="Football Sri Lanka"
    />
  )
}`

const PROPS = [
  { name: "matchTimer", type: "string", required: true, description: "Match running clock string (e.g. '43:10')." },
  { name: "homeTeamName", type: "string", required: true, description: "Full home team name." },
  { name: "homeTeamLogo", type: "string", required: true, description: "Home team logo image." },
  { name: "homeTeamScore", type: "number", required: true, description: "Home team score count." },
  { name: "awayTeamName", type: "string", required: true, description: "Full away team name." },
  { name: "awayTeamLogo", type: "string", required: true, description: "Away team logo image." },
  { name: "awayTeamScore", type: "number", required: true, description: "Away team score count." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament crest image." },
  { name: "organizerName", type: "string", required: true, description: "Organizer / governing body label." },
]

export default function ScoreBugLowerThirdDocsPage() {
  const { prev, next } = getAdjacentComponents("score-bug-lower-third")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="score-bug-lower-third" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Score Bug Lower Third
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Sleek full-width lower third scoreboard overlay suitable for lower-screen positioning during live broadcasts.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <ScoreboardOverlay
            matchTimer="43:10"
            homeTeamName="RENOWN FC"
            homeTeamLogo={team01Logo}
            homeTeamScore={0}
            awayTeamName="RATNAM SC"
            awayTeamLogo={team02Logo}
            awayTeamScore={0}
            tournamentLogo={wcLogo}
            organizerName="Football Sri Lanka"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="score-bug-lower-third.tsx"
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
