import fs from "node:fs"
import path from "node:path"

const source = path.resolve("src/components/overlayui")
const destination = path.resolve("registry/default")

function copyDirectory(sourceDir, destinationDir) {
  fs.mkdirSync(destinationDir, { recursive: true })

  const entries = fs.readdirSync(sourceDir, {
    withFileTypes: true,
  })

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name)
    const destinationPath = path.join(destinationDir, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath)
    } else {
      fs.copyFileSync(sourcePath, destinationPath)
    }
  }
}

fs.rmSync(destination, {
  recursive: true,
  force: true,
})

copyDirectory(source, destination)

console.log("✓ OverlayUI components synced to registry/default")