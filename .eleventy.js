const now = String(Date.now())
const htmlmin = require('html-minifier')
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
 

  eleventyConfig.addWatchTarget('./_tmp/style.css')
 

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addPassthroughCopy({ './src/_includes/img' : './img' });
 

  eleventyConfig.addShortcode('version', function () {
    return now
  })


  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified
    }
 
    return content
  })


  eleventyConfig.addCollection("events", function(collection) {
    return collection.getFilteredByGlob("./src/event/**/*.md");
  });

  eleventyConfig.addCollection("speakers", function(collection) {
    return collection.getFilteredByGlob("./src/speaker/**/*.md");
  });

  eleventyConfig.addCollection("talks", function(collection) {
    return collection.getFilteredByGlob("./src/talk/**/*.md");
  });


  eleventyConfig.addFilter('eventFilter', function(collection, event) {
    if (!event) return collection;
      const filtered = collection.filter(item => item.data.event == event)
      return filtered;
  });

  eleventyConfig.addFilter('talkFilter', function(collection, speaker) {
    if (!speaker) return collection;
      const filtered = collection.filter(item => item.data.speaker == speaker)
      return filtered;
  });

  eleventyConfig.addFilter('speakerFilter', function(collection, speaker) {
    if (!speaker) return collection;
      const filtered = collection.filter(item => item.fileSlug == speaker)
      return filtered;
  });

  eleventyConfig.addFilter("neatDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE);
  });


  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }

};