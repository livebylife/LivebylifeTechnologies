import React from 'react'
import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import * as styles from './layout.module.scss'

class Template extends React.Component {
  render() {
    const navLogo = this.props.navLogo
    const siteTitle = this.props.siteTitle
    const { children } = this.props
    
    return (
      <>
        <Seo />
          <Navigation logo={navLogo} title={siteTitle} />
        <main>{children}</main>
        <div className={styles.downScrollArrowContainer}>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Template

