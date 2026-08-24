import { Link } from "react-router"
import FixturesNResultsCard from "@/components/overlayui/fixtures-results-card"
import DesktopPreview from "@/components/showcase/desktop-preview"
import { CodePreview } from "@/components/showcase/code-preview"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/showcase/props-table"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"
import wcLogo from "@/assets/wc-logo.jpg"

const CODE_SAMPLE = `import FixturesNResultsCard from "@/components/overlayui/05.fixtures-results-card"
import wcLogo from "@/assets/wc-logo.jpg"

export default function FixturesNResultsCardDemo() {
  return (
    <FixturesNResultsCard
      tournamentLogo={wcLogo}
      tournamentName="SUPER LEAGUE 2026"
      organizerName="FOOTBALL SRI LANKA"
      title="FIXTURES & RESULTS"
      weekNumber="WEEK 1"
    />
  )
}`

const PROPS = [
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
  { name: "tournamentName", type: "string", required: true, description: "Official tournament title." },
  { name: "organizerName", type: "string", required: true, description: "Organizer or governing body name." },
  { name: "title", type: "string", required: true, description: "Card header title, default 'FIXTURES & RESULTS'." },
  { name: "weekNumber", type: "string", required: true, description: "Matchweek label (e.g., 'WEEK 1')." },
  { name: "fixturesData", type: "FixturesNResultsTableRow[]", required: false, description: "Custom array of fixtures with both scorelines and scheduled times." },
]

export default function FixturesResultsCardDocsPage() {
  const { prev, next } = getAdjacentComponents("fixtures-results-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="fixtures-results-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Fixtures Results Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Dual-purpose broadcast graphic showing latest completed match scores alongside upcoming tournament matchups.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <FixturesNResultsCard
            tournamentLogo={wcLogo}
            tournamentName="SUPER LEAGUE 2026"
            organizerName="FOOTBALL SRI LANKA"
            title="FIXTURES & RESULTS"
            weekNumber="WEEK 1"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="fixtures-results-card.tsx"
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
