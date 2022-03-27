const path = require('path');

module.exports = {
    entry: './public/src/app.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/dist')
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /\node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                      }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ],
              }
        ]
    },
    devtool: false
}