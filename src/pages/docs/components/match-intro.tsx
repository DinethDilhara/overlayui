import { Link } from "react-router"
import MatchIntro from "@/components/overlayui/match-intro"
import DesktopPreview from "@/components/showcase/desktop-preview"
import { CodePreview } from "@/components/showcase/code-preview"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/showcase/props-table"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"

import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"

const CODE_SAMPLE = `import MatchIntro from "@/components/overlayui/01.match-intro"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"
import wcLogo from "@/assets/wc-logo.jpg"

export default function MatchIntroDemo() {
  return (
    <MatchIntro
      teamOneName="RENOWN FC"
      teamTwoName="RATNAM SC"
      teamOneLogo={team01Logo}
      teamTwoLogo={team02Logo}
      tournamentLogo={wcLogo}
      organizerName="FOOTBALL SRI LANKA"
      week="WEEK 1"
      match="MATCH 4"
    />
  )
}`

const PROPS = [
  { name: "teamOneName", type: "string", required: true, description: "Display name for Team 1 / Home team." },
  { name: "teamTwoName", type: "string", required: true, description: "Display name for Team 2 / Away team." },
  { name: "teamOneLogo", type: "string", required: true, description: "Image URL / import for Team 1 emblem." },
  { name: "teamTwoLogo", type: "string", required: true, description: "Image URL / import for Team 2 emblem." },
  { name: "tournamentLogo", type: "string", required: true, description: "Image URL / import for tournament or league badge." },
  { name: "organizerName", type: "string", required: true, description: "Federation or tournament organizer label." },
  { name: "week", type: "string", required: false, description: "Optional tournament matchday or week number (e.g., 'WEEK 1')." },
  { name: "match", type: "string", required: false, description: "Optional match sequence indicator (e.g., 'MATCH 4')." },
]

export default function MatchIntroDocsPage() {
  const { prev, next } = getAdjacentComponents("match-intro")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="match-intro" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Match Intro
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Broadcast intro card displaying competing club emblems, club names, tournament branding, week, and match numbers.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <MatchIntro
            teamOneName="RENOWN FC"
            teamTwoName="RATNAM SC"
            teamOneLogo={team01Logo}
            teamTwoLogo={team02Logo}
            tournamentLogo={wcLogo}
            organizerName="FOOTBALL SRI LANKA"
            week="WEEK 1"
            match="MATCH 4"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="match-intro.tsx"
          language="tsx"
        />
      </div>

      <PropsTable props={PROPS} />

      {/* Footer Navigation */}
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
