interface CodePreviewProps {
  code: string
}

export function CodePreview({
  code,
}: CodePreviewProps) {
  async function copyCode() {
    await navigator.clipboard.writeText(code)
  }

  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div>
          <h2 className="font-semibold">
            Code
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Example usage of this component.
          </p>
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="
            rounded-md
            border
            px-3
            py-1.5
            text-sm
            transition
            hover:bg-muted
          "
        >
          Copy
        </button>
      </div>

      <pre className="overflow-x-auto bg-muted/30 p-5 text-sm leading-6">
        <code>{code}</code>
      </pre>
    </div>
  )
}