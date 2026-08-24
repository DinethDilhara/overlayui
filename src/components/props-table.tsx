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
              <th className="p-3">Prop</th>
              <th className="p-3">Type</th>
              <th className="p-3">Required</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40 font-mono">
            {rows.map((prop) => (
              <tr key={prop.name} className="hover:bg-accent/20 transition-colors">
                <td className="p-3 font-semibold text-foreground">{prop.name}</td>
                <td className="p-3 text-cyan-600 dark:text-cyan-400">{prop.type}</td>
                <td className="p-3 font-sans">
                  {prop.required ? (
                    <span className="text-red-500 font-medium">Yes</span>
                  ) : (
                    <span className="text-muted-foreground">No</span>
                  )}
                </td>
                <td className="p-3 font-sans text-muted-foreground">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PropsTable
