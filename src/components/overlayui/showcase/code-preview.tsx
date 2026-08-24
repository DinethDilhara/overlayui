import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockContent,
  CodeBlockIcon,
  CodeBlockGroup,
} from '@/components/code-block'

import { CopyButton } from '@/components/copy-button'
import { CodeblockShiki } from '@/components/shiki'

import type { Languages } from '@/utils/shiki/highlight'

interface CodePreviewProps {
  code: string
  language?: Languages
  filename: string
}

export function CodePreview({
  code,
  language = 'tsx',
  filename,
}: CodePreviewProps) {
  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockGroup>
          <CodeBlockIcon language={language} />
          <span>{filename}</span>
        </CodeBlockGroup>

        <CopyButton content={code} />
      </CodeBlockHeader>

      <CodeBlockContent>
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