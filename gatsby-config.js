require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = {
  developMiddleware: app => {
    app.use(
      "/submit",
      createProxyMiddleware({
        target: "https://api.livebylife.com/webform_rest",
        changeOrigin:true
      })
    )
  },
  siteMetadata: {
    title: `Live by Life Technologies`,
    siteUrl: `https://www.livebylife.com`,
    description: `Transform Your Digital Presence with Live By Life Technologies. We are your trusted web development partner in Cranbrook, BC. With over a decade of experience, we deliver reliable and customized web solutions that align with your unique goals. From creating exceptional websites to web-based applications, our expertise and dedication make a positive impact. Contact us today and let's bring your digital vision to life.`,
  },
  plugins: [
            {
              resolve:"gatsby-plugin-robots-txt",
              options:{
                host: 'https://www.livebylife.com',
                sitemap: 'https://www.livebylife.com/sitemap-0.xml',
                resolveEnv: () => process.env.GATSBY_ENV,
                env: {
                  development: {
                    policy: [{userAgent: '*', disallow: ['/']}]
                  },
                  production: {
                    policy: [{userAgent: '*', allow: '/'}]
                  }
                }
              }
            },
            {
              resolve:"gatsby-plugin-google-tagmanager",
              options:{
                id: process.env.GOOGLE_TAGMANAGER_ID,
                defaultDataLayer: {platform:"gatsby"},
                gtmAuth: process.env.GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING,
                gtmPreview:process.env.GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME,
                dataLayerName:process.env.DATA_LAYER_NAME,
                routeChangeEventName: "gatsby-route-change",
                enableWebVitalsTracking: true,
              },
            },
            "gatsby-plugin-sass",
            "gatsby-plugin-image",
            "gatsby-plugin-react-helmet", 
            "gatsby-plugin-sitemap",
            
            {
              resolve: "gatsby-plugin-htaccess",
              options:{
                https: true
              }
            }, 
            "gatsby-plugin-emotion", "gatsby-transformer-sharp",
            {
                resolve: 'gatsby-plugin-manifest',
                options: {
                  "icon": "src/images/icon.png"
                }
              }, 
              {
                resolve: "gatsby-plugin-sharp",
              
              },
              {
                resolve:'gatsby-source-drupal',
                options:{
                  baseUrl: process.env.GATSBY_API_URL,
                  apiBase: process.env.GATSBY_API_BASE,
                  imageCDN: false,
                  skipFileDownloads: false,
                  basicAuth: {
                    username:process.env.API_USERNAME,
                    password: process.env.API_PASSWORD
                  },
                  fastBuilds:true,
                  headers:{
                    'api-key':[process.env.API_KEY],
                    
                    accept: "application/vnd.api+json",
                  },
                }
              },
              {
                resolve:'gatsby-transformer-remark',
                options:{
                  plugins:['gatsby-remark-responsive-iframe']
                }
              },
              {
                resolve:'gatsby-plugin-styled-components',
              },
              {
                resolve: `gatsby-plugin-facebook-customer-chat`,
                options: {
                  sdk: {
                    appId: process.env.META_MESSENGER_TOKEN,
                    
                  },
                  chat: {
                    pageId: process.env.META_PAGE_ID,
                    loggedInGreeting: 'Hi! How can I help you?',
                    loggedOutGreeting: 'Hi! How can I help you?',
                  }
                },
              },
              
            ]
};