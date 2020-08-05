const config = {
  siteTitle: "Zero Counts", // Site title.
  siteTitleShort: "ZC", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Zero Counts", // Alternative site title for SEO.
  siteLogo: "/logos/zero-counts-logo-1024", // Logo used for SEO and manifest.
  siteUrl: "https://zerocounts.net", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A blog about video games, mostly. By Kyle Starr", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Zero Counds RSS feed", // Title of the RSS feed
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Kyle Starr", // Username to display in the author segment.
  userEmail: "info@zerocounts.net", // Email used for RSS feed's author segment
  userTwitter: "_zerocounts", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Pasadena, California", // User location to display in the author segment.
  // userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  // userDescription: "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Twitter",
      url: "https://twitter.com/_zerocounts",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:info@zerocount.net",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020. Kyle Starr", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#004992", // Used for setting manifest and progress theme colors.
  backgroundColor: "#000000" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
