import { Link } from "react-router"
import MatchOfficialsCard from "@/components/overlayui/match-officials-card"
import DesktopPreview from "@/components/showcase/desktop-preview"
import { CodePreview } from "@/components/showcase/code-preview"
import { getAdjacentComponents } from "@/config/components"
import { ArrowLeft, ArrowRight } from "lucide-react"
import wcLogo from "@/assets/wc-logo.jpg"
import { ComponentDocBar } from "@/components/layout/component-doc-bar"
import { PropsTable } from "@/components/showcase/props-table"

const CODE_SAMPLE = `import MatchOfficialsCard from "@/components/overlayui/07.match-officials-card"
import wcLogo from "@/assets/wc-logo.jpg"

export default function MatchOfficialsCardDemo() {
  return (
    <MatchOfficialsCard
      tournamentLogo={wcLogo}
      referee="SASHANKA MADUSHANKA"
      assistantReferee1="KUSHAN INDIKA"
      assistantReferee2="NIMASHA THENNAKOON"
      fourthOfficial="VIHANGA MADUWANTHA"
      refereeColor="#7ED8FF"
    />
  )
}`

const PROPS = [
  { name: "tournamentLogo", type: "string", required: true, description: "Tournament or federation logo image." },
  { name: "referee", type: "string", required: true, description: "Main match referee name." },
  { name: "assistantReferee1", type: "string", required: true, description: "Assistant referee 1 name." },
  { name: "assistantReferee2", type: "string", required: true, description: "Assistant referee 2 name." },
  { name: "fourthOfficial", type: "string", required: true, description: "Fourth match official name." },
  { name: "refereeColor", type: "string", required: false, description: "Referee kit accent color hex (default '#7ED8FF')." },
]

export default function MatchOfficialsCardDocsPage() {
  const { prev, next } = getAdjacentComponents("match-officials-card")

  return (
    <div className="space-y-10 max-w-4xl">
      <ComponentDocBar slug="match-officials-card" />
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Match Officials Card
        </h1>
        <p className="mt-2 text-base text-muted-foreground leading-relaxed">
          Match officiating crew graphic displaying the head referee, assistant linesmen, and 4th official.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Preview</h2>
        <DesktopPreview>
          <MatchOfficialsCard
            tournamentLogo={wcLogo}
            referee="SASHANKA MADUSHANKA"
            assistantReferee1="KUSHAN INDIKA"
            assistantReferee2="NIMASHA THENNAKOON"
            fourthOfficial="VIHANGA MADUWANTHA"
            refereeColor="#7ED8FF"
          />
        </DesktopPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold tracking-tight">Usage</h2>
        <CodePreview
          code={CODE_SAMPLE}
          filename="match-officials-card.tsx"
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
