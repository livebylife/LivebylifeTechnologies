import React, {useRef, useEffect} from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from './articles.module.css'
import {GatsbyImage} from 'gatsby-plugin-image'
import Contact from '../components/contact'

function replaceSpecificImage(str, imageNum,) {
  str = str.replace(/\d+/g, '');
  return str.replace(new RegExp(`\\[IMAGE-\\]`, 'g'), "");
}

function shortenString(str, length){
  var orignalLength = str.length
  if(length > orignalLength){
    return str
  }
  var endValue = length
  var number
  var newStr = ''
  for(number = 0; number <= endValue; number++){
    if(str[number].length != 0){
      newStr += str[number];
    }
  }
  return newStr + '...';
}

class ArticlesIndex extends React.Component {

    render(){
        const domain = this.props?.data?.nodeDomain
        
        const articles = this.props?.data?.allNodeBook.nodes

        
        return(
            <>
                <Seo title={domain.title} description={"Live by life Technologies blog. Here we write about technology stuff."}/>
                <Layout location={this.props.location} siteTitle="Articles :: Live by Life Technologies" navLogo={domain.relationships.field_domain_logo[1].uri.url}>
                    {articles.map((article) =>{
                        let articleSummary = shortenString(replaceSpecificImage(article.body.processed), 200)
                        let articleImage = article.relationships.field_feature_?.localFile.childImageSharp.gatsbyImageData
                        if(articleImage){
                            return(
                                <div key={article.url} className={styles.articleItem}>
                                    <div  id={article.drupal_internal__nid} className={styles.articlesHero}>
                                    <div></div>   
                                        <div className={styles.articlesHeroContainer}>
                                            
                                            <GatsbyImage image={articleImage} className={styles.image} alt={article.title} />
                                            <div className={styles.details}>
                                                <h1 className={styles.title}>{article.title}</h1>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.article}>
                                    <h2 className={styles.content}>{article.field_bpage_description}</h2>
                                    <div  dangerouslySetInnerHTML={{__html: articleSummary,
                                        }}
                                    />
                                    <Link to={article.path.alias}>Read More</Link>
                                    </div>
                                    
                                </div>
                            )
                        }
                    })}
                </Layout>
            </>
        )
    }
}
export default ArticlesIndex

export const pageQuery = graphql`query Articles {
    nodeDomain (drupal_internal__nid: {eq: 7}) {
        title
        body {
          processed
        }
        field_domain_slogan
        relationships {
          field_domain_logo {
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
              gatsbyImageData
            }
          }
        }
      }
      changed
      created
      field_bpage_description
      body {
        processed
      }
      path {
        alias
      }
    }
  }
}`