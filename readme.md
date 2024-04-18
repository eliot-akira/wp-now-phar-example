# wp-now-phar-example

Minimal example for issue at [WordPress/wordpress-playground#1241](https://github.com/WordPress/wordpress-playground/issues/1241).

## Start

```sh
git clone https://github.com/eliot-akira/wp-now-phar-example
cd wp-now-phar-example
npm install
npm run start
```

It ends with a WASM error, "null function or function signature mismatch".

To rebuild the example PHAR file.

```sh
npm run build
```
