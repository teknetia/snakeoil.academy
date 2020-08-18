module.exports = function(eleventyConfig) {

	const {Liquid} = require("liquidjs");
	eleventyConfig.setLibrary("liquid", new Liquid({
		extname: ".liquid",
		dynamicPartials: false,
		strict_filters: false
	}))

// eleventyConfig.addCollection("allMySortedContent", function(collectionApi) {
// 	console.log(collectionApi.getAllSorted());
// });

	eleventyConfig.addPassthroughCopy({"src/_includes/css" : "css"});
	eleventyConfig.addPassthroughCopy({"src/_includes/img" : "img"});

	return {
		dir: {
			input: "src",
			output: "_site"
		}
	}
};