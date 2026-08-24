import { Link } from "react-router"
import { Navbar } from "@/components/layout/navbar"
import { ArrowRight, Sparkles } from "lucide-react"
import StickyFooter from "@/components/layout/sticky-footer"

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
                  className="group mx-auto flex w-fit items-center gap-2.5 rounded-full border border-border/80 bg-accent/40 p-1 pl-4 transition-colors duration-300 hover:bg-accent/80"
                >
                  <span className="text-sm font-semibold text-foreground">
                    New:
                  </span>

                  <span className="text-sm text-muted-foreground">
                    Introducing the next-gen broadcast overlays
                  </span>

                  <div className="size-6 overflow-hidden rounded-full bg-foreground/10 duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6 items-center justify-center">
                        <ArrowRight className="size-3 text-foreground" />
                      </span>

                      <span className="flex size-6 items-center justify-center">
                        <ArrowRight className="size-3 text-foreground" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Title */}
                <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:mt-12 xl:text-7xl">
                  Broadcast overlays, beautifully connected
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                  Every score bug, lower third, tactical formation, and match
                  event in one living component library that helps teams
                  elevate live streaming.
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
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}
