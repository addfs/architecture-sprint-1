const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const HotModuleReplacementPlugin = require("webpack").HotModuleReplacementPlugin;
const deps = require("../package.json").dependencies;


module.exports = {
    entry: "./src/index",
    output: {
        publicPath: 'auto',
        chunkFilename: '[id].[contenthash].js',
    },
    devServer: {
        port: 3002,
        static: path.resolve(__dirname, "..", "./dist"),
        hot: false,
        liveReload: true,
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
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new ModuleFederationPlugin({
            name: "profile",
            filename: "remoteEntry.js",
            remotes: {
                mesto: 'mesto@http://localhost:3000/remoteEntry.js',
            },
            exposes: {
                "./Profile": "./src/components/Profile",
            },
            shared: [
                {
                    ...deps,
                    react: {
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    "react-dom": {
                        singleton: true,
                        requiredVersion: deps["react-dom"],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
