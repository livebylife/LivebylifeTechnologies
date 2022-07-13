
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './hero.module.css'

const Hero = ({imageUrl, title, content})=> {
    return(
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <GatsbyImage styles={styles.image} image={imageUrl.gatsbyImageData} alt="" />
                <div className={styles.details}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.content}>{content}</h2>
                </div>
            </div>
        </div>
    )
}


export default Hero

