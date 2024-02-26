import * as fs from 'node:fs/promises'
import * as fsPath from 'node:path'
import * as url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const data = {}

const addData = ({ description, reName, section }) => {
  if (!(section in data)) {
    data[section] = []
  }
  data[section].push({ description, reName })
}

(async() => {
  // read everything from src root
  const files = (await fs.readdir(fsPath.resolve(__dirname, '..'), { withFileTypes : true }))
    .filter((f) => f.isFile())
  for (const { name: fileName } of files) {
    const contents = await fs.readFile(fsPath.resolve(__dirname, '..', fileName), { encoding : 'utf8' })
    const lines = contents.split('\n')
    lines.forEach((l, i, a) => {
      const exportMatch = l.match(/^\s*export\s+const +([a-zA-Z0-9]+RE(?=[ =]))/)
      if (exportMatch !== null) {
        const [, reName] = exportMatch
        const prevLine = a[i - 1]
        const commentMatch = prevLine.match(/\/\/ *([^:]*): *?\s*(.+)/)
        if (commentMatch !== null) {
          const [, section, description] = commentMatch
          addData({ description, reName, section })
        }
        else {
          addData({ reName, section : 'Uncategorized' })
        }
      }
    })
  }

  let content = '\n'
  for (const section of Object.keys(data).sort()) {
    content += `### ${section}\n\n`
    for (const { description, reName } of data[section].sort((a, b) => a.reName.localeCompare(b.reName))) {
      content += `- __${reName}__`
      if (description !== undefined) {
        content += ': ' + description
      }
      content += '\n'
    }
    content += '\n'
  }

  const readmePath = fsPath.resolve(__dirname, '..', '..', 'README.md')
  await fs.appendFile(readmePath, content, { encoding : 'utf8' })
})()
