import { Link } from "react-router"
import ScoreBugExtraTimeCard from "@/components/overlayui/score-bug-extra-time-card"
import DesktopPreview from "@/components/showcase/desktop-preview"
import { CodePreview } from "@/components/showcase/code-preview"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/showcase/props-table"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"

const CODE_SAMPLE = `import ScoreBugExtraTimeCard from "@/components/overlayui/13.score-bug-extra-time-card"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"

export default function ScoreBugExtraTimeCardDemo() {
  return (
    <ScoreBugExtraTimeCard
      matchTimer="90:00"
      extraTime="+4"
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
  { name: "matchTimer", type: "string", required: true, description: "Match clock string (e.g., '90:00')." },
  { name: "extraTime", type: "string", required: true, description: "Stoppage / added injury time indicator (e.g., '+4')." },
  { name: "tournamentName", type: "string", required: true, description: "Tournament or league title." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament logo image." },
  { name: "homeTeamShortName", type: "string", required: true, description: "Home team acronym." },
  { name: "homeTeamLogo", type: "string", required: true, description: "Home team badge." },
  { name: "homeTeamScore", type: "number", required: true, description: "Home team score count." },
  { name: "homeTeamJerseyColor", type: "string", required: true, description: "Home team jersey swatch color." },
  { name: "awayTeamShortName", type: "string", required: true, description: "Away team acronym." },
  { name: "awayTeamLogo", type: "string", required: true, description: "Away team badge." },
  { name: "awayTeamScore", type: "number", required: true, description: "Away team score count." },
  { name: "awayTeamJerseyColor", type: "string", required: true, description: "Away team jersey swatch color." },
]

export default function ScoreBugExtraTimeCardDocsPage() {
  const { prev, next } = getAdjacentComponents("score-bug-extra-time-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="score-bug-extra-time-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Score Bug Extra Time Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Enhanced score bug overlay featuring an animated extra time / injury stoppage minutes badge next to the match clock.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <ScoreBugExtraTimeCard
            matchTimer="90:00"
            extraTime="+4"
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
          filename="score-bug-extra-time-card.tsx"
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
