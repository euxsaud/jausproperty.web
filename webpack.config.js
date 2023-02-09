// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const PugPlugin = require("pug-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProd = mode === "production";

    return {
        mode: isProd ? "production" : "development",

        entry: {
            index: "./src/index.pug",
        },

        output: {
            filename: isProd ? "js/[name].[contenthash:8].js" : "main.js",
            path: path.resolve(__dirname, "build"),
        },

        target: "web",

        devServer: {
            hot: false,
        },

        plugins: [
            new CleanWebpackPlugin(),

            new PugPlugin({
                extractCss: {
                    filename: isProd ? "css/[name].[contenthash:8].css" : "[name].css",
                },
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.pug$/i,
                    loader: PugPlugin.loader,
                    options: {
                        method: "render",
                    },
                },
                {
                    test: /\.(js|jsx)$/i,
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
                {
                    test: /\.(css|sass|scss)$/i,
                    use: ["css-loader", "sass-loader"],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: "asset",
                },

                // Add your rules for custom modules here
                // Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
    };
};
