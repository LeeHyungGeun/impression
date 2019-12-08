const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer({
  // presets: [require.resolve('babel-preset-react-app')],
  presets: ["@babel/preset-env"],
  babelrc: false,
  plugins: [
    [
      '@babel/transform-runtime',
      {
        helpers: false,
        // polyfill: true,
        regenerator: true,
        // moduleName: '@babel/runtime',
      },
    ],
    // 'transform-decorators-legacy',
    // 'transform-function-bind',
    // 'transform-es3-member-expression-literals',
    // 'transform-es3-property-literals',
  ],
})
