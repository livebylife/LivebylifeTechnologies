import { GatsbyImage } from 'gatsby-plugin-image';
import Img from 'gatsby-image'
import React, { Component} from 'react';
import {Link} from 'gatsby';
import * as styles from './blog-preview.module.css'
import Container from './container';

function extractBooks(data) {
  // Initialize the books array
  let books = [];

  // Iterate through the nodes in the data
  for (let node of data) {
    // Check if the node has a drupal_internal__book property and its depth is 1
    if (node.drupal_internal__book && node.drupal_internal__book.depth == 1) {
      // If so, add the node as a book to the books array
      books.push({
        'id': node.drupal_internal__nid,
        'title': node.title,
        'fImage': node.relationships.field_feature_,
        'images': node.relationships.field_book_image_s_,
        'pages': [],
        'url': changeFirstLetterCase(node.title)
      });
    }
  }

  // Return the books array
  return books;
}
function extractPages(data, books) {
  for (let node of data) {
    
    if (node.drupal_internal__book && node.drupal_internal__book.depth == 2) {
      let bookId = node.drupal_internal__book.bid;
      for (let book of books) {
        if (book.id == bookId) {          
          book.pages.push({
            id: node.drupal_internal__nid,
            title: node.title,
            images: node.relationships.field_feature_,
            images: node.relationships.field_book_image_s_,
            url: changeFirstLetterCase(node.title)
          });
          break;
        }
      }
    }
  }
}
function changeFirstLetterCase(str) {
  return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join('_');
}
const BlogPreview = (Books) => {
  var books = []
  if(Books){
    books = Books.Books
    if(Array.isArray(books)){
      return (
        <Container>
          <div className={styles.titleWrap}>
            <h1 className={styles.articlesTitle}>What we're writing about</h1>
          </div>
          <div className={styles.articles}>
            <ul className={styles.article_list}>
              {books.map((book) => {
                let bookImage = {}
                if(book.relationships.field_feature_){
                  bookImage = book.relationships.field_feature_.localFile.childImageSharp.gatsbyImageData
                  return (
                    <li className={styles.item} key={book.drupal_internal__nid}>
                        <Link to={`/articles#${book.drupal_internal__nid}`}>
                          <GatsbyImage image={bookImage} width="336px" className={styles.articleImage} alt=""/>
                          <br/>
                          <div className={styles.article_title_wrap}>
                            <h2 className={styles.title}>{book.title}</h2>
                          </div>
                          
                          <div className={styles.articleSlug}>
                            {book.field_bpage_description}
                          </div>
                        
                        </Link>
                        
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </Container>
      )
    }
  }
  return null  
}
export default BlogPreview