import { Link } from "react-router"
import { ArrowRight, Layers, Monitor } from "lucide-react"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"

const SAMPLE_USAGE = `import MatchIntro from "@/components/overlayui/01.match-intro"
import wcLogo from "@/assets/wc-logo.jpg"
import team01Logo from "@/assets/team-01-logo.png"
import team02Logo from "@/assets/team-02-logo.webp"

export default function BroadcastView() {
  return (
    <div className="w-screen h-screen bg-black/0">
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
    </div>
  )
}`

export default function IntroductionPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/50 px-3 py-0.5 text-xs font-medium text-muted-foreground mb-3">
          <span>Documentation</span>
          <span>·</span>
          <span>Getting Started</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Introduction
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          OverlayUI is an ultra-high definition React component library specifically engineered
          for live video broadcast graphics, sports streaming overlays, esports productions, and OBS browser sources.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border/70 bg-card p-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
            <Monitor className="size-4" />
          </div>
          <h3 className="font-bold text-base">Broadcast-Ready Scale</h3>
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
            All overlay cards and lower-thirds are designed natively for 2560×1440 and 1920×1080 canvas resolutions, scaling crisp and artifact-free.
          </p>
        </div>

        <div className="rounded-xl border border-border/70 bg-card p-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
            <Layers className="size-4" />
          </div>
          <h3 className="font-bold text-base">Copy & Paste Modularity</h3>
          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
            Components are self-contained. You can drop individual overlays into your OBS browser source or stream management dashboard with minimal dependencies.
          </p>
        </div>
      </div>

      {/* Quick Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Quick Example</h2>
        <p className="text-sm text-muted-foreground">
          Import any overlay component, pass required metadata as props, and render it inside your broadcast layer or full-screen canvas.
        </p>
        <CodePreview
          code={SAMPLE_USAGE}
          filename="broadcast-view.tsx"
          language="tsx"
        />
      </div>

      {/* Next Steps */}
      <div className="rounded-2xl border border-border/70 bg-accent/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-base">Ready to set up your project?</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Follow the installation guide to configure Tailwind CSS and required assets.
          </p>
        </div>
        <Link
          to="/docs/installation"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <span>Installation Guide</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  )
}
