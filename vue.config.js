module.exports = {
  pwa: {
    name: "MM Listas",
    themeColor: "#172b4d",
    msTileColor: "#172b4d",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#172b4d"
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8183",
        changeOrigin: true
      }
    }
  }
};
