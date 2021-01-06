module.exports = {
  siteMetadata: {
    title: 'Micael Gomes',
    description:
      'Desenvolvedor mobile & web - Advogando em Desing da Experiência do usuário desde de 2018.',
    author: '@micaellgoms',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-96NKBDGMJK',
        ],
        gtagConfig: {
          optimize_id: 'GTM-M8CQ9QX',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          // respectDNT: true,
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false,
        id: 2183527,
        sv: 6,
      },
    },
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
      resolve: 'gatsby-source-multi-api',
      options: {
        apis: [
          {
            prefix: 'RestApi',
            baseUrl: 'https://api.github.com/users/micaelgomes',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token:
          '9d9049e40a2392c0f42fe46b13751825bd6d2ab664726e6b0f26eee182cae3a6',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Micael Gomes 🙋`,
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
