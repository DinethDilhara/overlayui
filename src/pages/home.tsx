import { Link } from "react-router"
import { cn } from "@/utils/utils"
import { ArrowRight, Sparkles, MoveRight } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import StickyFooter from "@/components/layout/sticky-footer"
import { AnimatedShinyText } from "@/components/animated-shiny-text"
import { Backlight } from "@/components/backlight"
import { SparklesText } from "@/components/sparkles-text"
import { Highlighter } from "@/components/highlighter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <main className="relative z-10 min-h-screen bg-background">
        <Navbar variant="home" />
        <section>
          <div className="relative pt-16 pb-16 md:pt-28 md:pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                {/* Badge */}
                <Link
                  to="/docs/introduction"
                  className={cn(
                    "group mx-auto hidden w-fit rounded-full border border-border/80 bg-accent/40 transition-all ease-in hover:cursor-pointer hover:bg-accent/80 sm:block"
                  )}
                >
                  <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-sm transition ease-out hover:text-foreground hover:duration-300">
                    <span>✨ Introducing Overlay UI</span>

                    <MoveRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </AnimatedShinyText>
                </Link>

                {/* Title */}
                <h1 className="mx-auto mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:mt-8 xl:text-7xl">
                  <SparklesText>Broadcast overlays,</SparklesText>beautifully connected
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                  Every score bug, lower third, tactical formation, and match event in one
                  living component library that helps teams{" "}
                  <Highlighter
                    action="underline"
                    color="#f59e0b"
                    strokeWidth={2}
                    animationDuration={600}
                  >
                    elevate live streaming
                  </Highlighter>
                  .
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    to="/docs/introduction"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90"
                  >
                    <span>Explore the docs</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    to="/preview"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border/80 bg-background px-6 text-sm font-semibold text-foreground shadow-xs transition-all hover:scale-[1.02] hover:bg-accent"
                  >
                    <Sparkles className="size-4 text-amber-500" />
                    <span>Watch the preview</span>
                  </Link>
                </div>
              </div>

              {/* Video Frame */}
              <Backlight blur={30} className="w-full">
              <div className="relative mt-12 overflow-hidden p-2 sm:mt-16 sm:p-6">
                <div className="relative rounded-2xl border border-border/60 bg-background p-2 shadow-2xl shadow-black/40 ring ring-foreground/10 backdrop-blur-sm sm:p-3">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                    <video
                      className="size-full rounded-xl object-cover"
                      src="https://ik.imagekit.io/dinimgbucket/bootarc/blog/b1-aws/client-ui-demo.mp4?updatedAt=1781329739752"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
              </Backlight>
              </div>
          </div>
        </section>
      </main>
      <StickyFooter />
    </div>
  )
}
