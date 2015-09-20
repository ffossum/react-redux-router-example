'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const devServer = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
});

devServer.listen(8080, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:8080');
});
