module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://abbyxv.sytes.net/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Abby XV", // Used in manifest.json
          shortName: "Abby XV", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#5d434c", // Used in manifest.json
          themeColor: "#5d434c", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/noticias", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://abbyxv.matomo.cloud/',
        siteUrl: 'https://abbyxv.sytes.net/'
      }
    }
  ],
};
