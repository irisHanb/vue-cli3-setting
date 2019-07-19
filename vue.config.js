const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.resolve(__dirname, 'dist'),
    routes: ['/', '/about', '/portfolio'],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    })
  })
];

module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  }
};
