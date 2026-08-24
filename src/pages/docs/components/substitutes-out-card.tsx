import { Link } from "react-router"
import SubstitutesOutCard from "@/components/overlayui/substitutes-out-card"
import DesktopPreview from "@/components/showcase/desktop-preview"
import { CodePreview } from "@/components/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/showcase/props-table"

const CODE_SAMPLE = `import SubstitutesOutCard from "@/components/overlayui/18.substitutes-out-card"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"

export default function SubstitutesOutDemo() {
  return (
    <SubstitutesOutCard
      teamLogo={team01Logo}
      playerNumber="10"
      playerName="FAZLUR RAHUMAN"
      tournamentLogo={wcLogo}
    />
  )
}`

const PROPS = [
  { name: "teamLogo", type: "string", required: true, description: "Club badge image source." },
  { name: "playerNumber", type: "string | number", required: true, description: "Jersey number of the player leaving the pitch." },
  { name: "playerName", type: "string", required: true, description: "Full name of the departing player." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or federation crest image." },
]

export default function SubstitutesOutCardDocsPage() {
  const { prev, next } = getAdjacentComponents("substitutes-out-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="substitutes-out-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Substitutes Out
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Match substitution lower-third graphic indicating an outgoing substituted player's jersey number and name.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <SubstitutesOutCard
            teamLogo={team01Logo}
            playerNumber="10"
            playerName="FAZLUR RAHUMAN"
            tournamentLogo={wcLogo}
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="substitutes-out-card.tsx"
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
