import { useState } from "react"
import { Link } from "react-router"
import { COMPONENTS_REGISTRY } from "@/config/components"
import { Sparkles, ArrowRight, Search, Layers } from "lucide-react"

export default function ComponentsIndexPage() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const categories = [
    "All",
    "Matches & Fixtures",
    "Teams & Lineups",
    "Score Bugs",
    "Match Events & Cards",
    "Match Officials",
    "General",
  ]

  const filteredComponents = COMPONENTS_REGISTRY.filter((comp) => {
    const matchesSearch =
      comp.title.toLowerCase().includes(search.toLowerCase()) ||
      comp.description.toLowerCase().includes(search.toLowerCase()) ||
      comp.slug.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      activeCategory === "All" || comp.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-accent/50 px-3 py-0.5 text-xs font-medium text-muted-foreground mb-3">
          <span>Documentation</span>
          <span>·</span>
          <span>Components Directory</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Components
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Explore 20 production-grade broadcast overlay components ready for live streaming and OBS.
            </p>
          </div>
          <Link
            to="/preview"
            className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-accent/40 px-4 py-2 text-xs font-semibold text-foreground hover:bg-accent transition-colors self-start sm:self-auto shrink-0"
          >
            <Sparkles className="size-3.5 text-amber-500" />
            <span>Interactive Catalog</span>
          </Link>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search overlays by title, tag, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border/80 bg-background pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-accent/50 text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredComponents.map((comp) => (
          <Link
            key={comp.id}
            to={comp.href}
            className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  {comp.category}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground/60">
                  {comp.filename}
                </span>
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                <span>{comp.title}</span>
                <ArrowRight className="size-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </h3>
              <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {comp.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-mono text-[11px]">/docs/components/{comp.slug}</span>
              <span className="font-medium text-foreground group-hover:underline">View Docs &rarr;</span>
            </div>
          </Link>
        ))}

        {filteredComponents.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
            <Layers className="size-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-semibold">No components found</p>
            <p className="text-xs text-muted-foreground mt-1">Try searching for a different keyword or category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
