module.exports = {
  siteMetadata: {
    title: `Front-end Developer`,
    description: `Self-taught,Front-end Developer with 6+ years commercial experience creating successful websites.`,
    author: `@moufeed_m`,
    siteUrl: "https://www.moufeed.me",
    phone: "+905353869746",
    email: "m.jobakji@hotmail.com",
    name: "moufeed",
    siteTitle: "M−MOUFEED",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Josefin Sans\:300,600`],
        display: "swap",
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
