// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    const { mode } = argv;
    const isProd = mode === "production";

    return {
        entry: "./src/index.js",

        output: {
            filename: isProd ? "[name].[contenthash].js" : "main.js",
            path: path.resolve(__dirname, "build"),
        },

        // devTool: isDev ? "source-map" : "none",

        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),

            new MiniCssExtractPlugin({
                filename: isProd ? "[name].[contenthash].css" : "[name].css",
                chunkFilename: isProd ? "[name].[contenthash].css" : "[name].css",
            }),
        ],

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", "sass-loader"],
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
