const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const HotModuleReplacementPlugin = require("webpack").HotModuleReplacementPlugin;
const deps = require("../package.json").dependencies;


module.exports = {
    entry: "./src/index",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "userProfileApp-bundle.js"
    },
    resolve: {
        alias: {
            'library-app': path.resolve(__dirname, '../../library_app/src/'),
        },
    },
    devServer: {
        port: 3001,
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
            name: "user_profile_app",
            library: { type: "var", name: "user_profile_app" },
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/components/App",
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
                'shared_library': {
                    import: 'shared_library',
                    requiredVersion: require('../../../shared_library/package.json').version,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: './public/favicon.ico'
        }),
    ],
};
