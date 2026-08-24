import { useState } from "react"
import { Outlet } from "react-router"
import { Navbar } from "@/components/layout/navbar"
import { Sidebar001, DocsSidebar } from "@/components/layout/sidebar"
import { X } from "lucide-react"

export function DocsLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      
      <Navbar
        variant="docs"
        showMenuButton={true}
        onMenuToggle={() => setMobileOpen((v) => !v)}
      />

    
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex gap-6 pt-6">
          {/* Desktop Sticky Sidebar */}
          <div className="hidden md:block sticky top-24 h-[calc(100vh-7rem)] shrink-0">
            <Sidebar001
              defaultWidth={260}
              minWidth={200}
              maxWidth={360}
              className="h-full border-r border-border/40 pr-3"
            >
              <DocsSidebar />
            </Sidebar001>
          </div>

          {/* Mobile Drawer */}
          {mobileOpen && (
            <div className="fixed inset-0 z-50 flex md:hidden">
              <div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
                onClick={() => setMobileOpen(false)}
              />

              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-background p-4 shadow-2xl border-r border-border">
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <span className="font-bold text-sm tracking-tight">Navigation</span>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="flex size-7 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:bg-accent"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto pt-2">
                  <DocsSidebar onItemClick={() => setMobileOpen(false)} />
                </div>
              </div>
            </div>
          )}

          {/* Main Content Area */}
          <main className="flex-1 min-w-0 pb-24 pt-2">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
