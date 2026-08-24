import { Link } from "react-router"
import RedCardOverlay from "@/components/overlayui/21.red-card"
import DesktopPreview from "@/components/overlayui/showcase/desktop-preview"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/props-table"

const CODE_SAMPLE = `import RedCardOverlay from "@/components/overlayui/21.red-card"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"

export default function RedCardDemo() {
  return (
    <RedCardOverlay
      teamLogo={team01Logo}
      playerNumber="8"
      playerName="AMAN FAIZER"
      tournamentLogo={wcLogo}
    />
  )
}`

const PROPS = [
  { name: "teamLogo", type: "string", required: true, description: "Club badge / team emblem image." },
  { name: "playerNumber", type: "string | number", required: true, description: "Jersey number of the sent-off player." },
  { name: "playerName", type: "string", required: true, description: "Full name of the sent-off player." },
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or league logo image source." },
]

export default function RedCardDocsPage() {
  const { prev, next } = getAdjacentComponents("red-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="red-card" />
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/50 px-3 py-0.5 text-xs font-medium text-muted-foreground mb-3">
          <span>Components</span>
          <span>·</span>
          <span>Match Events & Cards</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Red Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Disciplinary red card send-off overlay with player name, jersey number, and team badge.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <RedCardOverlay
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
          filename="red-card.tsx"
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
