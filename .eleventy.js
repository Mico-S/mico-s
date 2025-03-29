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
      timeZone: "UTC",
    });
  });

  // Add HTML entity decoding filter
  eleventyConfig.addFilter("decodeHtmlEntities", (string) => {
    return string
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'");
  });

  // Add excerpt filter to get first paragraph
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return "";

    // First, check if there's a paragraph before any headers
    const firstParagraphMatch = content.match(/<p>(.*?)<\/p>/);
    if (firstParagraphMatch && firstParagraphMatch[0]) {
      return firstParagraphMatch[0];
    }

    // If no paragraphs found, return a safe empty string
    return "";
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
      typographer: true, // Enable smartquotes and other typographic replacements
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
