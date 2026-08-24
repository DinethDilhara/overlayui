import { Link } from "react-router"
import PointTableCard from "@/components/overlayui/03.point-table-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"
import wcLogo from "@/assets/wc-logo.jpg"

const CODE_SAMPLE = `import PointTableCard from "@/components/overlayui/03.point-table-card"
import wcLogo from "@/assets/wc-logo.jpg"

export default function PointTableCardDemo() {
  return (
    <PointTableCard
      tournamentLogo={wcLogo}
      tournamentName="SUPER LEAGUE 2026"
      organizerName="FOOTBALL SRI LANKA"
      title="POINTS TABLE"
      weekNumber="WEEK 1"
    />
  )
}`

const PROPS = [
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
  { name: "tournamentName", type: "string", required: true, description: "Official tournament title (e.g., 'SUPER LEAGUE 2026')." },
  { name: "organizerName", type: "string", required: true, description: "Organizer / governing body label." },
  { name: "title", type: "string", required: true, description: "Header title text, default 'POINTS TABLE'." },
  { name: "weekNumber", type: "string", required: true, description: "Current tournament matchweek string (e.g., 'WEEK 1')." },
  { name: "tableData", type: "PointTableRow[]", required: false, description: "Custom array of league standings rows with P, W, D, L, and PTS." },
]

export default function PointTableCardDocsPage() {
  const { prev, next } = getAdjacentComponents("point-table-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="point-table-card" />
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/50 px-3 py-0.5 text-xs font-medium text-muted-foreground mb-3">
          <span>Components</span>
          <span>·</span>
          <span>Matches & Fixtures</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Point Table Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Comprehensive broadcast league table card displaying team positions, match statistics (Played, Won, Drawn, Lost), and total points.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <PointTableCard
            tournamentLogo={wcLogo}
            tournamentName="SUPER LEAGUE 2026"
            organizerName="FOOTBALL SRI LANKA"
            title="POINTS TABLE"
            weekNumber="WEEK 1"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="point-table-card.tsx"
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
