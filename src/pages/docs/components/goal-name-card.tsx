import { Link } from "react-router"
import GoalNameCard from "@/components/overlayui/22.goal-name-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import GoalNameCard from "@/components/overlayui/22.goal-name-card"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"

export default function GoalNameCardDemo() {
  return (
    <GoalNameCard
      teamLogo={team01Logo}
      playerNumber="8"
      playerName="AMAN FAIZER"
      tournamentLogo={wcLogo}
    />
  )
}`

const PROPS = [
  { name: "teamLogo", type: "string", required: true, description: "Scoring team emblem image." },
  { name: "playerNumber", type: "string | number", required: true, description: "Jersey number of the goalscorer." },
  { name: "playerName", type: "string", required: true, description: "Full name of the goalscorer." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
]

export default function GoalNameCardDocsPage() {
  const { prev, next } = getAdjacentComponents("goal-name-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="goal-name-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Goal Name Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Broadcast lower-third celebration overlay celebrating a goal event and displaying the goalscorer's name and jersey number.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <GoalNameCard
            teamLogo={team01Logo}
            playerNumber="8"
            playerName="AMAN FAIZER"
            tournamentLogo={wcLogo}
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="goal-name-card.tsx"
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
