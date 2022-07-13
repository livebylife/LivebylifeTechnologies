import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react'
import * as styles from './servicesHero.module.css'

const Serviceshero = ({imageURL, title, content}) => {
    return(
        <div className={styles.servicesHero}>
            <div className={styles.servicesHeroContainer}>
                <GatsbyImage styles={styles.image} image={imageURL} alt={title}/>
                <div className={styles.details}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.content}>{content}</h2>
                </div>
            </div>
        </div>
    )
}

export default Serviceshero