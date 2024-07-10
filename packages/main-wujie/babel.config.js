module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        useBuiltIns: 'usage',
      },
    ],
    '@vue/cli-plugin-babel/preset',
  ],
}
