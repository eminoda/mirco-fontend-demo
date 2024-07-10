const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: 'auto',
  configureWebpack: {
    // target: 'web',
    plugins: [
      new ModuleFederationPlugin({
        name: 'wujie',
        remotes: {
          // app2: 'app2@[app2Url]/remoteEntry.js',
          vue2Component: 'vue2Component@http://localhost:8081/remoteEntry.js',
        },
      }),
      new ExternalTemplateRemotesPlugin(),
    ],
  },
})
