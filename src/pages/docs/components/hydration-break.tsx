import { Link } from "react-router"
import HydrationBreakBug from "@/components/overlayui/15.bug-hydration-break"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"
import wcLogo from "@/assets/wc-logo.jpg"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import HydrationBreakBug from "@/components/overlayui/15.bug-hydration-break"
import wcLogo from "@/assets/wc-logo.jpg"

export default function HydrationBreakDemo() {
  return (
    <HydrationBreakBug
      tournamentLogo={wcLogo}
    />
  )
}`

const PROPS = [
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image." },
]

export default function HydrationBreakDocsPage() {
  const { prev, next } = getAdjacentComponents("hydration-break")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="hydration-break" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Hydration Break
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Broadcast event bug indicating cooling pauses, hydration breaks, or official match water pauses.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <HydrationBreakBug tournamentLogo={wcLogo} />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="hydration-break.tsx"
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
