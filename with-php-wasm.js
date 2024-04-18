import path from 'path'
import { NodePHP } from '@php-wasm/node'

async function main() {

  const php = await NodePHP.load()
  const cwd = process.cwd()

  php.mount(cwd, '/here')

  const result = await php.cli([
    'php',
    '/here/example.phar',
  ])
}

main().catch(console.error)
  .finally(() => process.exit())