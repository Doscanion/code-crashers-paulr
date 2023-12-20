const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/js/javascript.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
		clean: { keep: /index\.html/i },
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/i,
				loader: "esbuild-loader",
				options: { target: "es2015" },
			},
		],
	},
	devServer: {
		hot: true,
		open: true,
		static: {
			directory: path.join(__dirname, "public"),
		},
	},
	devtool: "inline-source-map",
};
