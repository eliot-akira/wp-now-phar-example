import path from 'path'
import { NodePHP } from '@php-wasm/node'

async function main() {

  const php = await NodePHP.load()
  const cwd = process.cwd()

  php.mount(cwd, '/here')
  await php.setPhpIniEntry('phar.readonly', '0')
  const result = await php.run({
    code: `<?php
$phar = new Phar("/here/example.phar");
$phar->addFile("/here/example.php", "example.php");
`
  })

  console.log(result)
}

main().catch(console.error)
  .finally(() => process.exit())