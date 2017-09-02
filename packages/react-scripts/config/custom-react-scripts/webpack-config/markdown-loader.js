module.exports = test => isDev => {
	let loaders = [
		{
			loader: require.resolve("html-loader")
		},
		{
			loader: require.resolve("markdown-it-loader")
		}
	];

	return {
		test,
		use: loaders
	}
};
