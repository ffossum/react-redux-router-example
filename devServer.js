'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

let devServer = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true
});

devServer.listen(8080, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:8080');
});
