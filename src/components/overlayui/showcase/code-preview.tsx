import { useState } from 'react'

import {
  CodeBlock,
  CodeBlockContent,
} from '@/components/code-block'
import { CodeblockShiki } from '@/components/shiki'

import type { Languages } from '@/utils/shiki/highlight'

interface CodePreviewProps {
  code: string
  language?: Languages
}

export function CodePreview({
  code,
  language = 'tsx',
}: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  async function copyCode() {
    await navigator.clipboard.writeText(code)

    setCopied(true)

    window.setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <CodeBlock>
      <CodeBlockContent className="relative">
        <button
          type="button"
          onClick={copyCode}
          aria-label="Copy code"
          className="
            absolute
            top-3
            right-2
            z-10
            inline-flex
            size-7
            items-center
            justify-center
            rounded-md
            text-sm
            opacity-70
            transition-all
            hover:bg-accent
            hover:text-accent-foreground
            hover:opacity-100
          "
        >
          {copied ? '✓' : '⧉'}
        </button>

        <CodeblockShiki
          code={code}
          language={language}
          lineNumbers
          className="
            min-w-0
            overflow-x-auto
            px-4
            py-3.5
          "
        />
      </CodeBlockContent>
    </CodeBlock>
  )
}


// import { useState } from 'react'

// import { CodeblockShiki } from '@/components/shiki'

// interface CodePreviewProps {
//   code: string
//   language?: 'tsx' | 'ts' | 'js' | 'html' | 'css' | 'bash' | 'json' | 'mdx'
// }

// export function CodePreview({
//   code,
//   language = 'tsx',
// }: CodePreviewProps) {
//   const [copied, setCopied] = useState(false)

//   async function copyCode() {
//     await navigator.clipboard.writeText(code)

//     setCopied(true)

//     setTimeout(() => {
//       setCopied(false)
//     }, 1500)
//   }

//   return (
//     <div className="overflow-hidden rounded-xl border">
//       <div className="flex items-center justify-between border-b px-5 py-4">
//         <div>
//           <h2 className="font-semibold">
//             Code
//           </h2>

//           <p className="mt-1 text-sm text-muted-foreground">
//             Example usage of this component.
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={copyCode}
//           className="
//             rounded-md
//             border
//             px-3
//             py-1.5
//             text-sm
//             transition
//             hover:bg-muted
//           "
//         >
//           {copied ? 'Copied' : 'Copy'}
//         </button>
//       </div>

//       <CodeblockShiki
//         code={code}
//         language={language}
//         lineNumbers
//         className="
//           bg-muted/30
//           p-5
//           text-sm
//           leading-6
//         "
//       />
//     </div>
//   )
// }

// interface CodePreviewProps {
//   code: string
// }

// export function CodePreview({
//   code,
// }: CodePreviewProps) {
//   async function copyCode() {
//     await navigator.clipboard.writeText(code)
//   }

//   return (
//     <div className="overflow-hidden rounded-xl border">
//       <div className="flex items-center justify-between border-b px-5 py-4">
//         <div>
//           <h2 className="font-semibold">
//             Code
//           </h2>

//           <p className="mt-1 text-sm text-muted-foreground">
//             Example usage of this component.
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={copyCode}
//           className="
//             rounded-md
//             border
//             px-3
//             py-1.5
//             text-sm
//             transition
//             hover:bg-muted
//           "
//         >
//           Copy
//         </button>
//       </div>

//       <pre className="overflow-x-auto bg-muted/30 p-5 text-sm leading-6">
//         <code>{code}</code>
//       </pre>
//     </div>
//   )
// }