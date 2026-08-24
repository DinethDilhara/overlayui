import { Link } from "react-router"
import TeamsNamesLowerThird from "@/components/overlayui/17.team-names-lower-third"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import TeamsNamesLowerThird from "@/components/overlayui/17.team-names-lower-third"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"

export default function TeamNamesLowerThirdDemo() {
  return (
    <TeamsNamesLowerThird
      homeTeamName="Colombo FC"
      homeTeamLogo={team01Logo}
      awayTeamName="Kandy United"
      awayTeamLogo={team02Logo}
      tournamentLogo={wcLogo}
      tournamentName="Super League"
      tournamentYear="2026"
      venue="Sugathadasa Stadium"
    />
  )
}`

const PROPS = [
  { name: "homeTeamName", type: "string", required: true, description: "Home team full name." },
  { name: "homeTeamLogo", type: "string", required: true, description: "Home team emblem image." },
  { name: "awayTeamName", type: "string", required: true, description: "Away team full name." },
  { name: "awayTeamLogo", type: "string", required: true, description: "Away team emblem image." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament logo." },
  { name: "tournamentName", type: "string", required: true, description: "Tournament name." },
  { name: "tournamentYear", type: "string", required: true, description: "Edition / year string (e.g., '2026')." },
  { name: "venue", type: "string", required: true, description: "Match stadium or venue name." },
]

export default function TeamNamesLowerThirdDocsPage() {
  const { prev, next } = getAdjacentComponents("team-names-lower-third")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="team-names-lower-third" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Team Names Lower Third
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Match intro lower third displaying opposing club names, emblems, match stadium venue, and competition year.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <TeamsNamesLowerThird
            homeTeamName="Colombo FC"
            homeTeamLogo={team01Logo}
            awayTeamName="Kandy United"
            awayTeamLogo={team02Logo}
            tournamentLogo={wcLogo}
            tournamentName="Super League"
            tournamentYear="2026"
            venue="Sugathadasa Stadium"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="team-names-lower-third.tsx"
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
