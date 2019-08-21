const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, disableEsLint } = require("customize-cra");
// const { getLessVars } = require('antd-theme-generator');
const theme = require("../theme");

module.exports = override(
  fixBabelImports("import", { libraryName: "antd", libraryDirectory: "es", style: true }),
  addLessLoader({ javascriptEnabled: true, modifyVars: theme() }),
  addDecoratorsLegacy(),
  disableEsLint()
);
