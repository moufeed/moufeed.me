module.exports = {
  siteMetadata: {
    title: `Front-end Developer`,
    description: `Self-taught,Front-end Developer with 6+ years commercial experience creating successful websites.`,
    author: `@moufeed_m`,
    siteUrl: "https://www.moufeed.me",
    phone: "+905353869746",
    email: "m.jobakji@hotmail.com",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Front-end Developer`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4b6cc1`,
        theme_color: `#4b6cc1`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
