import { Link } from "react-router"
import CoachCard from "@/components/overlayui/19.coach-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import CoachCard from "@/components/overlayui/19.coach-card"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"

export default function CoachCardDemo() {
  return (
    <CoachCard
      teamLogo={team01Logo}
      coachName="FAZLUR RAHUMAN"
      tournamentLogo={wcLogo}
    />
  )
}`

const PROPS = [
  { name: "teamLogo", type: "string", required: true, description: "Club badge / team emblem image." },
  { name: "coachName", type: "string", required: true, description: "Full name of the team head coach." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image." },
]

export default function CoachCardDocsPage() {
  const { prev, next } = getAdjacentComponents("coach-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="coach-card" />
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/50 px-3 py-0.5 text-xs font-medium text-muted-foreground mb-3">
          <span>Components</span>
          <span>·</span>
          <span>Teams & Lineups</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Coach Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Broadcast lower-third card displaying the head coach's name with team badge and tournament branding.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <CoachCard
            teamLogo={team01Logo}
            coachName="FAZLUR RAHUMAN"
            tournamentLogo={wcLogo}
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="coach-card.tsx"
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
