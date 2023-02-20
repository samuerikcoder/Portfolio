import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Estácio Notas',
}

const markdown = `
# Estácio Notas
`.trim()

export default async function EstacioNotas() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return <CodePreview code={code} />
}
