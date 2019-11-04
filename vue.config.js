const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|css)$/,
      })
    ]
  },
  pwa: {
    name: 'GDG Tokyo Web App',
    themeColor: '#4A90E2'
  }
}