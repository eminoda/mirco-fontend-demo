const { defineConfig } = require('@vue/cli-service')

const { ModuleFederationPlugin } = require('webpack').container

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  chainWebpack: (config) => {
    // config.optimization.delete('splitChunks')
    config.optimization.splitChunks({
      ...config.optimization.get('splitChunks'),
      ...{
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
          },
          common: {
            name: 'chunk-common',
            minChunks: 1,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true,
          },
        },
      },
    })
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'vue2Component',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
        },
        // shared: { vue: { singleton: true } },
      }),
    ],
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
})
