import type { ReactNode } from "react"

import DesktopPreview from "@/components/showcase/desktop-preview"
import { PropsEditor, type PropDefinition } from "@/components/showcase/props-editor"
import { CodePreview } from "@/components/showcase/code-preview"
import type { Languages } from '@/utils/shiki/highlight'

interface ComponentShowcaseProps {
  title: string
  description?: string

  propDefinitions: PropDefinition[]
  values: Record<string, unknown>
  onChange: (name: string, value: unknown) => void
  preview: ReactNode

  code: string
  language?: Languages
  filename: string
}

export function ComponentShowcase({
  title,
  description,
  propDefinitions,
  values,
  onChange,
  preview,
  code,
  language,
  filename,
}: ComponentShowcaseProps) {
  return (
    <div className="w-full">
      {/* Heading */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

        {description && (
          <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
        )}
      </header>

      {/* Preview */}
      <DesktopPreview>{preview}</DesktopPreview>

      {/* Props */}
      <div className="mt-8">
        <PropsEditor
          definitions={propDefinitions}
          values={values}
          onChange={onChange}
        />
      </div>

      {/* Code */}
      <div className="mt-8">
        <CodePreview 
        code={code}
        filename={filename}
        language={language}
       />
      </div>
    </div>
  )
}
