import { Link } from "react-router"
import ScoreBugCard from "@/components/overlayui/12.score-bug-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"

const CODE_SAMPLE = `import ScoreBugCard from "@/components/overlayui/12.score-bug-card"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"

export default function ScoreBugCardDemo() {
  return (
    <ScoreBugCard
      matchTimer="64:21"
      tournamentName="SUPER LEAGUE 2026"
      tournamentLogo={wcLogo}
      homeTeamShortName="COL"
      homeTeamLogo={team01Logo}
      homeTeamScore={2}
      homeTeamJerseyColor="#008AAF"
      awayTeamShortName="KAN"
      awayTeamLogo={team02Logo}
      awayTeamScore={1}
      awayTeamJerseyColor="#ffffff"
    />
  )
}`

const PROPS = [
  { name: "matchTimer", type: "string", required: true, description: "Match clock time display string (e.g., '64:21')." },
  { name: "tournamentName", type: "string", required: true, description: "Tournament or league title string." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament emblem image URL or import." },
  { name: "homeTeamShortName", type: "string", required: true, description: "3-letter short abbreviation for Home team." },
  { name: "homeTeamLogo", type: "string", required: true, description: "Home team badge image." },
  { name: "homeTeamScore", type: "number", required: true, description: "Current score count for Home team." },
  { name: "homeTeamJerseyColor", type: "string", required: true, description: "Hex color code for Home team jersey bar accent." },
  { name: "awayTeamShortName", type: "string", required: true, description: "3-letter short abbreviation for Away team." },
  { name: "awayTeamLogo", type: "string", required: true, description: "Away team badge image." },
  { name: "awayTeamScore", type: "number", required: true, description: "Current score count for Away team." },
  { name: "awayTeamJerseyColor", type: "string", required: true, description: "Hex color code for Away team jersey bar accent." },
]

export default function ScoreBugCardDocsPage() {
  const { prev, next } = getAdjacentComponents("score-bug-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="score-bug-card" />
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/50 px-3 py-0.5 text-xs font-medium text-muted-foreground mb-3">
          <span>Components</span>
          <span>·</span>
          <span>Score Bugs</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Score Bug Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Standard on-screen broadcast score bug displaying live timer, team acronyms, scores, jersey color swatches, and tournament badge.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <ScoreBugCard
            matchTimer="64:21"
            tournamentName="SUPER LEAGUE 2026"
            tournamentLogo={wcLogo}
            homeTeamShortName="COL"
            homeTeamLogo={team01Logo}
            homeTeamScore={2}
            homeTeamJerseyColor="#008AAF"
            awayTeamShortName="KAN"
            awayTeamLogo={team02Logo}
            awayTeamScore={1}
            awayTeamJerseyColor="#ffffff"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="score-bug-card.tsx"
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
