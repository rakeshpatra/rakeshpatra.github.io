const resume = require("./data/resume.json")
const {
  basics: { name, website },
} = resume

module.exports = {
  siteMetadata: {
    title: name,
    description: `The home page of Rakesh Patra, software engineer, drummer & amateur photographer.`,
    author: name,
    siteUrl: website,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `siteData`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156348163-1",
      },
    },
  ],
}
