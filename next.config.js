const withLess = require('next-with-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './styles/main.less'),
    'utf8',
  ),
);

module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
    lessOptions: {
      modifyVars: themeVariables, // make your antd custom effective
      localIdentName: '[path]___[local]___[hash:base64:5]',
    },
  },
});
