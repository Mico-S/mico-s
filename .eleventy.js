module.exports = function (eleventyConfig) {
  // Copy assets directory to the output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add date filters
  eleventyConfig.addFilter("dateIso", (date) => {
    return date.toISOString();
  });

  eleventyConfig.addFilter("dateReadable", (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // Configure Markdown-it with attributes plugin
  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");

  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    }).use(markdownItAttrs)
  );

  // Set input and output directories
  return {
    pathPrefix: "/mico-s/",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site",
    },
    // Allow .html files to use Nunjucks templating
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
