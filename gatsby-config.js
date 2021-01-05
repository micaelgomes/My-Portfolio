module.exports = {
  siteMetadata: {
    title: 'Micael Gomes',
    description:
      'Desenvolvedor mobile & web - Advogando em Desing da Experiência do usuário desde de 2018.',
    author: '@micaellgoms',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disable: false,
      },
    },
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
        endpoints: ['https://api.github.com/users/micaelgomes'],
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        // You can get your Access Token by following this tutorial: http://developer.dribbble.com/v2/oauth/
        access_token:
          '9d9049e40a2392c0f42fe46b13751825bd6d2ab664726e6b0f26eee182cae3a6',
      },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Micael Gomes - Portfolio`,
        short_name: `Micael`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#8fa842`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
