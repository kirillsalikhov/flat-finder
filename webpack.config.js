module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js',
        publicPath: '/webpack/'
    },
    module: {
        loaders: [
            {
                test: /\.(scss|css|sass)$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel' // 'babel-loader' is also a legal name to reference
            }
        ]
    }
};