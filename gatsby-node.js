const util = require('util')

const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    query {
      allNodeBook(filter: {status: {eq: true}}, sort: {created: DESC}) {
        edges {
          node {
            drupal_internal__nid
            title
            path {
              alias
            }
            
          }
          next {
            drupal_internal__nid
            title
            path {
              alias
            }
          }
          previous {
            drupal_internal__nid
            title
            path {
              alias
            }
          }
        }
      }
    }
  `)
  result.data.allNodeBook.edges.forEach(edge => {
    
    createPage({
      path: `${edge.node.path.alias}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title,
        id: edge.node.drupal_internal__nid,
        pid: edge.next?.drupal_internal__nid,
        nid: edge.previous?.drupal_internal__nid,
        npath: edge.next?.path.alias,
        ntitle: edge.next?.title,
        ppath: edge.previous?.path.alias,
        ptitle: edge.previous?.title      
      },
    })
  })
}