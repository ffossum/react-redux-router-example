module.exports = {
    entry: [
        './src/main.jsx'
    ],
    output: {
        path: __dirname + '/public/assets',
        publicPath: 'http://localhost:8080/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel']
            }
        ]
    }
};