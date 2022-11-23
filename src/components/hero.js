
import { GatsbyImage } from 'gatsby-plugin-image'
import React, {useRef, useEffect, version } from 'react'
import {Link} from 'gatsby'
import * as styles from './hero.module.css'

const Hero = ({imageUrl, title, content})=> {

    const ref = useRef(null)
    useEffect(()=> {
        const hero = ref.current
        hero.onmousemove = (e) => {
            requestAnimationFrame(() =>{
                        const x = e.pageX - e.target.offsetLeft;
                        const y = e.pageY - e.target.offsetTop;
                
                        e.target.style.setProperty('--x', `${ x }px`);
                        e.target.style.setProperty('--y', `${ y }px`);		
                    })
        }
    })

    return(
        <div ref={ref} className={styles.hero}>
            <div className={styles.heroContainer}>
                <h1 className={styles.heroTitle}>
                  {title}
                </h1>
                <div className={styles.details} dangerouslySetInnerHTML={{__html:content}}/>
                <div className={styles.cta}>
                    <div className={styles.ctaButtonSolid}>
                        <Link to="about">Show More</Link>
                    </div>
                    <div className={styles.ctaButtonOpen}>
                        <Link to="contact">Contact Us</Link>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    )
}


export default Hero

/* old version
const Hero = ({imageUrl, title, content})=> {
    return(
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                
                <div className={styles.details}>
                    <div className={styles.left}>
                    <GatsbyImage styles={styles.image} image={imageUrl.gatsbyImageData} alt="" />
                        <h1 className={styles.title}><strong>{title}</strong></h1>
                        <div className={styles.right}>
                            <div className={styles.content} dangerouslySetInnerHTML={{__html:content}}/>
                            <div className={styles.button}>
                                <Link to="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
} */