const path = require ('path');
const htmlWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool:'inline-source-map',
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            title:"To-do-list"
        }),
    ],
    module: {
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resources',
            },
        ],
    }
};