require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
        // You can overwrite values here that are used for the SEO component
        // You can also add new values here to query them like usual
        // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
        siteTitle: `GwiyeomGo Blog`,
        siteTitleAlt: `GwiyeomGo Blog`,
        siteHeadline: `GwiyeomGo Blog`,
        siteUrl: `https://gwiyeomgo.github.io`,
        siteDescription: `GwiyeomGo 의 개발 블로그입니다`,
        siteLanguage: `ko`,
        siteImage: `/banner.jpg`,
        author: `GwiyeomGo`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `developmentRecords`,
            },
        },
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
                        title: `기록`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [
                    {
                        name: `GitHub`,
                        url: `https://github.com/gwiyeomgo`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.gstatic.com`],
                // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
                // See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog#changing-your-fonts
                web: [
                    {
                        name: `IBM Plex Sans`,
                        file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
                    },
                ],
            },
        },
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gwiyeom-blog`,
                short_name: `gwiyeom-blog`,
                description: `xx`,
                start_url: `/`,
                background_color: `#fff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({query: {site, allPost}}) =>
                            allPost.nodes.map((post) => {
                                const url = site.siteMetadata.siteUrl + post.slug
                                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                                return {
                                    title: post.title,
                                    date: post.date,
                                    excerpt: post.excerpt,
                                    url,
                                    guid: url,
                                    custom_elements: [{"content:encoded": content}],
                                }
                            }),
                        query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
                        output: `rss.xml`,
                        title: `gwiyeom-blog`,
                    },
                ],
            },
        },{
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "UA-219953705-1", // Google Analytics / GA
                    "G-P3DYW3SB5H", // GA4
                  ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                },
            },
        },
        ,
        `gatsby-plugin-gatsby-cloud`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
}
