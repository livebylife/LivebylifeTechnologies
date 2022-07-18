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
    description: `We create blazing fast, modern apps`,
  },
  plugins: [
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
            "gatsby-plugin-emotion", 
            {
                resolve: 'gatsby-plugin-manifest',
                options: {
                  "icon": "src/images/icon.png"
                }
              }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
                resolve: 'gatsby-source-filesystem',
                options: {
                  "name": "images",
                  "path": "./src/images/"
                },
                __key: "images"
              },
              {
                resolve:'gatsby-source-drupal',
                options:{
                  baseUrl: process.env.GATSBY_API_URL,
                  apiBase: process.env.GATSBY_API_BASE,
                  imageCDN: false,
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