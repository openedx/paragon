/* eslint-disable */

// README: When updating the Algolia DocSearch crawler configuration here, it will also need to be updated
// in the Algolia DocSearch crawler editor (https://crawler.algolia.com/). Otherwise, changes to this persisted
// configuration will not actually apply to the Paragon documentation website as intended.

// Note: there are REDACTED Algolia `appId` and `apiKey` values below; these should not be committed to the repository
// but should be included in the crawler configuration in the Algolia DocSearch crawler editor.

new Crawler({
  rateLimit: 8,
  startUrls: ["https://paragon-openedx.netlify.app/"],
  renderJavaScript: false,
  sitemaps: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://paragon-openedx.netlify.app/**"],
  schedule: "every 1 day",
  actions: [
    {
      indexName: "paragon-openedx",
      pathsToMatch: [
        "https://paragon-openedx.netlify.app/**",
        "!https://paragon-openedx.netlify.app/insights/",
        "!https://paragon-openedx.netlify.app/status/",
        "!https://paragon-openedx.netlify.app/changelog/",
      ],
      recordExtractor: ({ helpers, url, $ }) => {
        const category = url.pathname.split("/")[1] || "Documentation";
        return helpers.docsearch({
          recordProps: {
            // lvl1: ["header h1", "article h1", "main h1", "h1", "head > title"],
            lvl1: ["main h1"],
            lvl0: {
              selectors: "",
              defaultValue:
                category.charAt(0).toUpperCase() + category.slice(1),
            },
            lvl2: ["main h2"],
            lvl3: ["article h3", "main h3", "h3"],
            lvl4: ["article h4", "main h4", "h4"],
            lvl5: ["article h5", "main h5", "h5"],
            lvl6: ["article h6", "main h6", "h6"],
            content: ["article p, article li", "main p, main li", "p, li"],
          },
          aggregateContent: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "paragon-openedx": {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
  appId: "", // REDACTED
  apiKey: "", // REDACTED
  extraUrls: [
    "https://paragon-openedx.netlify.app/foundations/colors",
    "https://paragon-openedx.netlify.app/foundations/elevation",
    "https://paragon-openedx.netlify.app/foundations/typography",
    "https://paragon-openedx.netlify.app/foundations/css-utilities",
    "https://paragon-openedx.netlify.app/foundations/responsive",
    "https://paragon-openedx.netlify.app/foundations/brand-icons",
    "https://paragon-openedx.netlify.app/guides/installation-and-usage",
    "https://paragon-openedx.netlify.app/tools/component-generator",
    "https://paragon-openedx.netlify.app/playground",
  ],
});
