const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = function (config) {
  config.set({
    /* Kode lainnya disembunyikan */
    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
      plugins: [
        new Dotenv({
          path: path.resolve(__dirname, '.env'),
          systemvars: true,
          safe: true,
        }),
      ],
    },

    webpackMiddleware: {
      stats: 'errors-only',
    },

    /* Kode lainnya disembunyikan */
  });
};
