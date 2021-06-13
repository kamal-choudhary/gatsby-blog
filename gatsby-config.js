module.exports = {
  siteMetadata: {
    title: "Gatsby Blog",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/default-page-layout.js"),
        },
      },
    },
  ],
};
