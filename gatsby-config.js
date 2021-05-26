/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      // offset: 1000
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // Directory with the strings JSON
      path: `${__dirname}/src/intl`,
      // Supported languages
      languages: [`es`, `en`],
      // Default site language
      defaultLanguage: `en`,
      // Redirects to `/pt` in the route `/`
      redirect: false,
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  'gatsby-plugin-postcss',
  
],
}
