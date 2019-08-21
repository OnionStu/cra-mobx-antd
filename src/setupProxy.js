const proxy = require("http-proxy-middleware");

module.exports = function handleProxy(app) {
  app.use(
    proxy("/api", {
      target: "http://39.108.79.100:18080/",
      ws: true,
      logLevel: "debug",
      changeOrigin: true
    })
  );
};
