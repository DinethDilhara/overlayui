import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { CodePreview } from "@/components/overlayui/showcase/code-preview"

const INSTALL_CMD = `# Using pnpm (recommended)
pnpm add lucide-react clsx tailwind-merge motion @base-ui/react

# Using npm
npm install lucide-react clsx tailwind-merge motion @base-ui/react`

const TAILWIND_CONFIG = `@import "tailwindcss";
@import "tw-animate-css";
@import "@fontsource-variable/geist";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-heading: var(--font-sans);
  --font-sans: 'Geist Variable', sans-serif;
  --color-border: var(--border);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}`

const UTILS_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

export default function InstallationPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Installation
        </h1>
        <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
          How to install dependencies and configure OverlayUI components in your React + Vite project.
        </p>
      </div>

      {/* Step 1: Install Dependencies */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            1
          </div>
          <h2 className="text-xl font-bold tracking-tight">Install Dependencies</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          OverlayUI relies on lightweight primitives for animations and icons.
        </p>
        <CodePreview
          code={INSTALL_CMD}
          filename="terminal"
          language="bash"
        />
      </div>

      {/* Step 2: Configure CSS and Fonts */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            2
          </div>
          <h2 className="text-xl font-bold tracking-tight">Configure Tailwind CSS</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Import your fonts and Tailwind CSS styles into your global CSS entrypoint.
        </p>
        <CodePreview
          code={TAILWIND_CONFIG}
          filename="src/index.css"
          language="css"
        />
      </div>

      {/* Step 3: Classnames Utility */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            3
          </div>
          <h2 className="text-xl font-bold tracking-tight">Add the `cn` Utility</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Create a utility function to merge Tailwind classes conditionally.
        </p>
        <CodePreview
          code={UTILS_CODE}
          filename="src/utils/utils.ts"
          language="tsx"
        />
      </div>

      {/* Next Step CTA */}
      <div className="rounded-2xl border border-border/70 bg-accent/30 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-base">Browse the Components</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Explore the complete directory of 20+ broadcast overlay cards.
          </p>
        </div>
        <Link
          to="/docs/components"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <span>Explore Components</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  )
}
