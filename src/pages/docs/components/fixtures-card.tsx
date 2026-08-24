import { Link } from "react-router"
import FixturesCard from "@/components/overlayui/04.fixtures-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"
import wcLogo from "@/assets/wc-logo.jpg"

const CODE_SAMPLE = `import FixturesCard from "@/components/overlayui/04.fixtures-card"
import wcLogo from "@/assets/wc-logo.jpg"

export default function FixturesCardDemo() {
  return (
    <FixturesCard
      tournamentLogo={wcLogo}
      tournamentName="SUPER LEAGUE 2026"
      organizerName="FOOTBALL SRI LANKA"
      title="FIXTURES"
      weekNumber="WEEK 1"
    />
  )
}`

const PROPS = [
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
  { name: "tournamentName", type: "string", required: true, description: "Official tournament title." },
  { name: "organizerName", type: "string", required: true, description: "Organizer or sponsor name." },
  { name: "title", type: "string", required: true, description: "Header title string, default 'FIXTURES'." },
  { name: "weekNumber", type: "string", required: true, description: "Matchweek label (e.g., 'WEEK 1')." },
  { name: "fixturesData", type: "FixturesTableRow[]", required: false, description: "Custom array of fixture rows with teams, times, and dates." },
]

export default function FixturesCardDocsPage() {
  const { prev, next } = getAdjacentComponents("fixtures-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="fixtures-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Fixtures Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Upcoming match schedule and fixtures schedule board with team badges, kickoff times, and tournament metadata.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <FixturesCard
            tournamentLogo={wcLogo}
            tournamentName="SUPER LEAGUE 2026"
            organizerName="FOOTBALL SRI LANKA"
            title="FIXTURES"
            weekNumber="WEEK 1"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="fixtures-card.tsx"
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
