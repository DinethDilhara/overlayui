import { Link } from "react-router"
import SubstitutesInCard from "@/components/overlayui/18.substitutes-in-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import SubstitutesInCard from "@/components/overlayui/18.substitutes-in-card"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"

export default function SubstitutesInDemo() {
  return (
    <SubstitutesInCard
      teamLogo={team01Logo}
      playerNumber="10"
      playerName="FAZLUR RAHUMAN"
      tournamentLogo={wcLogo}
    />
  )
}`

const PROPS = [
  { name: "teamLogo", type: "string", required: true, description: "Club badge image." },
  { name: "playerNumber", type: "string | number", required: true, description: "Jersey number of the substituted player entering the match." },
  { name: "playerName", type: "string", required: true, description: "Full name of the player entering." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
]

export default function SubstitutesInCardDocsPage() {
  const { prev, next } = getAdjacentComponents("substitutes-in-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="substitutes-in-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Substitutes In
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Match substitution lower-third graphic indicating an incoming substitute player's jersey number and name.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <SubstitutesInCard
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
          filename="substitutes-in-card.tsx"
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
