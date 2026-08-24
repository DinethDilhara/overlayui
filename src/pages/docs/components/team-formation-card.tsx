import { Link } from "react-router"
import TeamFormationCard from "@/components/overlayui/10.team-formation-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team02Logo from "@/assets/team-02-logo.webp"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import TeamFormationCard from "@/components/overlayui/10.team-formation-card"
import wcLogo from "@/assets/wc-logo.jpg"
import team02Logo from "@/assets/team-02-logo.webp"

export default function TeamFormationCardDemo() {
  return (
    <TeamFormationCard
      tournamentLogo={wcLogo}
      teamLogo={team02Logo}
      teamName="COLOMBO FC"
      headCoachName="KASUN JAYASURIYA"
      formationType="4-3-3"
    />
  )
}`

const PROPS = [
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
  { name: "teamLogo", type: "string", required: true, description: "Team crest image." },
  { name: "teamName", type: "string", required: true, description: "Team display name." },
  { name: "headCoachName", type: "string", required: true, description: "Head coach name." },
  { name: "formationType", type: "string", required: true, description: "Tactical formation schema (e.g., '4-3-3', '4-4-2')." },
  { name: "players", type: "Player[]", required: false, description: "List of starting players mapped to tactical pitch nodes." },
]

export default function TeamFormationCardDocsPage() {
  const { prev, next } = getAdjacentComponents("team-formation-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="team-formation-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Team Formation Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Tactical pitch graphic displaying the team's formation structure (e.g., 4-3-3) with player jersey numbers and field positioning.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <TeamFormationCard
            tournamentLogo={wcLogo}
            teamLogo={team02Logo}
            teamName="COLOMBO FC"
            headCoachName="KASUN JAYASURIYA"
            formationType="4-3-3"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="team-formation-card.tsx"
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
