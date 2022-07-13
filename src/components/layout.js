import React from 'react'
import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'


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
        <Footer />
      </>
    )
  }
}

export default Template

