import React from 'react'
import * as styles from './landing-page.module.css'
import '../components/assets/dxpr_builder.css'
import Container from './container'

const LandingPage =({landingPageContent}) => {
    return (
        <Container className={styles.contaier}>
            <div className={styles.outer} dangerouslySetInnerHTML={{__html:landingPageContent}}/>

        </Container>
    )
}
export default LandingPage

/* const LandingPage =({image1, image2, landingPageContent}) => {
    console.log(image1)
    return (
        <Container className={styles.contaier}>
            <div className={styles.outer}>
                <div className={styles.section1}>
                    <div className={styles.left}>
                        <h1>harness the cloud</h1>
                        <p>build your cloud infrastructure with us. Learn more about our cloud solutions.</p>
                        <form action="#">
                            <input type="submit" value="Schedule a Meetup"/>
                        </form>
                    </div>
                    <div className={styles.right}>
                        <img src={image1} alt="top" />
                        <br />
                        <img src={image2} alt="bottom" />
                    </div>
                </div>
                <div className={styles.section2}>
                    <h1>WHY LIVE BY LIFE</h1>
                    
                </div>
                
            </div>
        </Container>
    )
}
export default LandingPage */