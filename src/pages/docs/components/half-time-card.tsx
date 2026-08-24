import { Link } from "react-router"
import HalfTimeCard from "@/components/overlayui/16.half-time-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import HalfTimeCard from "@/components/overlayui/16.half-time-card"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"

export default function HalfTimeCardDemo() {
  return (
    <HalfTimeCard
      title="HALF TIME"
      homeTeamName="RENOWN FC"
      homeTeamLogo={team01Logo}
      homeTeamScore={0}
      awayTeamName="RATNAM SC"
      awayTeamLogo={team02Logo}
      awayTeamScore={0}
      tournamentName="SUPER LEAGUE 2026"
    />
  )
}`

const PROPS = [
  { name: "title", type: "string", required: true, description: "Card title (e.g. 'HALF TIME' or 'FULL TIME')." },
  { name: "homeTeamName", type: "string", required: true, description: "Home team full name." },
  { name: "homeTeamLogo", type: "string", required: true, description: "Home team crest image." },
  { name: "homeTeamScore", type: "number", required: true, description: "Home team score." },
  { name: "awayTeamName", type: "string", required: true, description: "Away team full name." },
  { name: "awayTeamLogo", type: "string", required: true, description: "Away team crest image." },
  { name: "awayTeamScore", type: "number", required: true, description: "Away team score." },
  { name: "tournamentName", type: "string", required: true, description: "Tournament / league name." },
]

export default function HalfTimeCardDocsPage() {
  const { prev, next } = getAdjacentComponents("half-time-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="half-time-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Half Time Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Full-screen half-time and full-time match score summary card with competing team crests and tournament details.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <HalfTimeCard
            title="HALF TIME"
            homeTeamName="RENOWN FC"
            homeTeamLogo={team01Logo}
            homeTeamScore={0}
            awayTeamName="RATNAM SC"
            awayTeamLogo={team02Logo}
            awayTeamScore={0}
            tournamentName="SUPER LEAGUE 2026"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="half-time-card.tsx"
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
