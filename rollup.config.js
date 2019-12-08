import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import babelconfig from './.babelrc.json'

const pkgName = 'impression'
const pkg = {
  all: `dist/${pkgName}.js`,
  main: `dist/${pkgName}.cjs.js`,
  module: `dist/${pkgName}.esm.js`,
  browser: `dist/${pkgName}.umd.js`
}

export default [
  {
    input: 'src/lib/impression.js',
    output: {
      name: 'impression',
      file: pkg.all,
      sourcemap: true,
      strict: true,
      format: 'umd'
    },
    plugins: [
      resolve({
        mainFields: [
          'module',
          'main',
          'jsnext'
        ],
        browser: true,
      }),
      commonjs(),
      babel(babelconfig),
      replace({
        exclude: 'node_modules/**',
        ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
    ]
  }
]