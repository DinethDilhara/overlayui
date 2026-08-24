import { cn } from "@/utils/utils"

export interface PropDefinition {
  name: string
  type: string
  required?: boolean
  description: string
  default?: string
}

export interface PropsTableProps {
  props?: PropDefinition[]
  items?: PropDefinition[]
  data?: PropDefinition[]
  title?: string
  className?: string
}

export function PropsTable({
  props: propsList,
  items,
  data,
  title = "Props",
  className,
}: PropsTableProps) {
  const rows = propsList ?? items ?? data ?? []

  return (
    <div className={cn("space-y-3", className)}>
      {title && <h2 className="text-lg font-bold tracking-tight">{title}</h2>}
      <div className="overflow-x-auto rounded-xl border border-border/70 bg-card">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-border/70 bg-accent/40 text-muted-foreground font-semibold">
            <tr>
              <th className="px-2.5 py-2 sm:p-3 whitespace-nowrap">Prop</th>
              <th className="px-2.5 py-2 sm:p-3 whitespace-nowrap">Type</th>
              <th className="px-2.5 py-2 sm:p-3 whitespace-nowrap">Required</th>
              <th className="px-2.5 py-2 sm:p-3">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40 font-mono">
            {rows.map((prop) => (
              <tr key={prop.name} className="hover:bg-accent/20 transition-colors">
                <td className="px-2.5 py-2 sm:p-3 font-semibold text-foreground whitespace-nowrap">{prop.name}</td>
                <td className="px-2.5 py-2 sm:p-3 text-cyan-600 dark:text-cyan-400 whitespace-nowrap">{prop.type}</td>
                <td className="px-2.5 py-2 sm:p-3 font-sans whitespace-nowrap">
                  {prop.required ? (
                    <span className="text-red-500 font-medium">Yes</span>
                  ) : (
                    <span className="text-muted-foreground">No</span>
                  )}
                </td>
                <td className="px-2.5 py-2 sm:p-3 font-sans text-muted-foreground leading-snug sm:leading-normal min-w-[180px] sm:min-w-0">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PropsTable
