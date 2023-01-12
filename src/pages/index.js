import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ServicePreview from '../components/services-preview'
import ParallaxDivider from '../components/parallax-divider'

import { Helmet } from "react-helmet"
import Topbanner from '../components/Topbanner'
import ContactForm from '../components/contact'
import AboutPreview from '../components/about-preview'
import LandingPage from '../components/landing-page'
import "../components/assets/dxpr_builder.css"
import HeroPreviewSlider from '../components/blog-preview'
import BlogPreview from '../components/blog-preview'
// import BackgroundImage from '../components/background-image'

class RootIndex extends React.Component{
  render(){
    
    const siteData = this.props?.data?.allNodeDomain.edges[1].node
    // console.log(siteData)
    
    const siteNavLogo = siteData.relationships.field_domain_logo[1].uri.url
    const siteName = siteData.title
    const siteSlogan = siteData.field_domain_slogan
    const heroMessage = siteData.body.processed
    const siteLogoURL = siteData.relationships.field_domain_about_images[0].localFile.childImageSharp
    const services = siteData.relationships.node__domain_services
    const featureService = this.props?.data?.nodeDomainServices
    const parallaxImages = this.props?.data?.allNodeDomain.edges[1].node.relationships.node__parallax_divider
    const books = this.props?.data?.allNodeBook.nodes
    

    return(
      <>
        <Helmet>
          <meta charSet='utf-8'/>
          <title>{siteName}</title>
        </Helmet>
        {/* <Topbanner/> */}
        
        <Layout location={this.props.location} siteTitle={siteName} navLogo={siteNavLogo} >
        
        
        <Hero imageUrl={siteLogoURL} title={siteName} content={heroMessage} />
        <BlogPreview Books={books}/>
        <ServicePreview service={featureService}/>
        
        <ParallaxDivider 
          imageUrl={parallaxImages[1].relationships.field_parallax_image[0].localFile.url} 
          header='Who is Live by Life Technologies'
        />
       
        {/* <ArticlePreview posts={posts}/> */}
        <AboutPreview aboutContent={siteData.relationships.node__domain_about[0].body.processed}/>  
        <ServicePreview services={services} />
        <ParallaxDivider imageUrl={parallaxImages[1].relationships.field_parallax_image[1].localFile.url}/>
        <ContactForm location={this.props.location}/>
        {/* <BackgroundImage/> */}
        </Layout>
        <BlogPreview/>
      </>
    )
  }
}
export default RootIndex

export const pageQuery = graphql`
query DomainData {
  allNodeDomain {
    edges {
      node {
        title
        field_domain_slogan
        body {
          processed
        }
        relationships {
          node__domain_services {
            title
            status
            path{
              alias
            }
            drupal_id
            body {
              processed
            }
            field_domain_service_slug {
              processed
            }
            relationships {
              field_ds_images {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 300)
                  }
                }
                uri {
                  url
                }
              }
            }
            field_ds_images {
              title
              alt
            }
            status
            drupal_id
          }
          field_domain_logo {
            filename
            uri {
              url
            }
            localFile {
              childImageSharp {
                gatsbyImageData(width: 412, layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          },
          node__domain_about{
            body{
              processed
            }
          }
          node__parallax_divider{
            relationships{
              field_parallax_image {
                internal{
                  content
                }
                localFile {
                  url
                }
              }
            }
          }
          field_domain_about_images {
            localFile {
              childImageSharp {
                gatsbyImageData(height:400)
              }
            }
          }
        }
      }
    }
  }
  allFileFile {
    edges {
      node {
        filename
        drupal_internal__fid
        uri {
          url
        }
      }
    }
  }
  allNodeArticle(
    sort: {order: DESC, fields: created}
    limit: 3
    filter: {status: {eq: true}}
  ) {
    pageInfo {
      perPage
    }
    nodes {
      title
      field_article_slug
      body {
        processed
      }
      relationships {
        field_image {
          uri {
            url
          }
          filename
          filesize
          children {
            id
          }
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 424
                height: 212
              )
            }
          }
        }
      }
    }
  }
  allNodeParallaxDivider(
    filter: {field_dsmatch: {drupal_internal__target_id: {eq: 7}}, title: {eq: "Index"}}
  ) {
    edges {
      node {
        title
        relationships {
          field_parallax_image {
            uri{
              url
            }
          }
        }
      }
    }
  }
  nodeDomainServices(drupal_internal__nid: {eq: 27}) {
    title
    body {
      value
    }
    field_domain_service_slug {
      value
    }
    relationships {
      field_ds_images {
        uri {
          url
        }
      }
    }
  }
  allNodeBook(filter: {status: {eq: true}}, sort: {changed: DESC}) {
    nodes {
      drupal_internal__book {
        bid
        nid
        pid
        depth
        p1
        p2
        p3
        p4
        p5
        p6
        p7
        p8
        p9
      }
      drupal_internal__nid
      title
      relationships {
        field_feature_ {
          localFile {
            childImageSharp {
              resize(width: 450) {
                src
              }
              gatsbyImageData(width: 450)
            }
          }
        }
      }
      changed
      created
      field_bpage_description
    }
  }
}
`

