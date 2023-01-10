import { GatsbyImage } from 'gatsby-plugin-image';
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
  const data = Books.Books
  var len = ""
  var books = []
  if(Array.isArray(data)){
    len = data.length
    books = extractBooks(data)
    extractPages(data, books)
  }
  
  
  
  return (
    <Container>
      <div className={styles.titleWrap}>
        <h1 className={styles.bookTitle}>What we're writing about</h1>
      </div>
      <div className={styles.books}>
        <ul className={styles.bookList}>
          {books.map((book) => {
            console.log(book)
            return (
              <li className={styles.item} key={book.id}>
                
                   <Link to={`/articles#${book.url}`}>
                    {/* <GatsbyImage image={book.fImage.localFile.childImageSharp.gatsbyImageData} width="270px" height="180px" className={styles.bookImage}/> */}
                    <br/>
                    <h2 className={styles.ArticleTitle}>{book.title}</h2>
                   </Link>
                   <div className={styles.articleSlug} dangerouslySetInnerHTML={{__html:book.body.value}}/>
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}
export default BlogPreview