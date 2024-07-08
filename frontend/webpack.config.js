const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
    entry: "./src/index",
    mode: "development",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "mestoApp-bundle.js"
    },
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[contenthash:8][ext]',
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[contenthash:8][ext]',
                },
            },
        ]
    },
    plugins: [
        //     new ModuleFederationPlugin({
        //     name: "app1",
        //     filename: "remoteEntry.js",
        //     remotes: {
        //         app2: "app2@http://localhost:3001/remoteEntry.js",
        //     },
        //     exposes: {
        //         "./Button": "./src/Button",
        //     },
        //     }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: './public/favicon.ico'
        }),
    ],
};