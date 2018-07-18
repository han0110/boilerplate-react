const { series, rimraf } = require('nps-utils'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  scripts: {
    dev: {
      description: 'nps clean and run webpack-dev-server',
      default: series.nps('clean', 'webpack.dev'),
    },
    build: {
      description: 'nps clean and run all builds',
      default: series.nps('clean', 'webpack.prod'),
      watch: series.nps('clean', 'webpack.prod --watch'),
    },
    webpack: {
      dev: 'webpack-dev-server --config ./webpack/webpack.dev.js',
      prod: 'webpack --config ./webpack/webpack.prod.js',
    },
    clean: {
      description: 'clean dist directory',
      default: rimraf('dist'),
    },
    lint: {
      description: 'lint *.js,*.jsx in src',
      default: 'eslint --cache src && flow .',
    },
    deploy: {
      description: 'deploy to gh-page',
      default: series.nps('clean', 'build', 'deploy.deploy'),
      deploy: 'gh-pages -d dist -b gh-pages -m ":rocket: Deploy"',
    },
  },
};
