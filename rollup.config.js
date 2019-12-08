import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import babelconfig from './.babelrc.json'
import alias from 'rollup-plugin-alias'

const pkgName = 'impression'
const pkg = {
  all: `dist/${pkgName}.js`,
  main: `dist/${pkgName}.cjs.js`,
  module: `dist/${pkgName}.esm.js`,
  browser: `dist/${pkgName}.umd.js`
}

const ROOT_DIR = path.resolve(process.cwd())

export default [
  {
    input: 'src/lib/index.js',
    output: {
      name: 'impression',
      file: pkg.all,
      sourcemap: true,
      strict: true,
      format: 'umd'
    },
    plugins: [
      alias({
        resolve: ['.js'],
        entries: [
          { find: '@', replacement: path.resolve(ROOT_DIR) },
          { find: 'env', replacement: path.resolve(ROOT_DIR, 'src/common/env') }
        ]
      }),
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