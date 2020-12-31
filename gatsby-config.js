module.exports = {
  siteMetadata: {
    title: 'Micael Gomes',
    author: '@micaellgoms',
  },
  plugins: [
    'gatsby-plugin-transition-link',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-WT3BMDBBFP',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://api.github.com/users/micaelgoms'
        ],
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        // You can get your Access Token by following this tutorial: http://developer.dribbble.com/v2/oauth/
        access_token: '9d9049e40a2392c0f42fe46b13751825bd6d2ab664726e6b0f26eee182cae3a6'
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
};
