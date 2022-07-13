import React from 'react'
import { Link } from 'gatsby'
import Particles from 'react-tsparticles'
import {loadFull } from "tsparticles"
import tspOptions from './tsparticle_options'

import * as styles from './navigation.module.css'

class Navigation extends React.Component {
  render() {
    const navLogo = process.env.GATSBY_API_URL + this.props.logo
    const siteTitle = this.props.title
    const particlesInit = async (main) => {await loadFull(main);};
    const particlesLoaded = (container) => {};

    return(
        <>
          <nav 
          role="navigation" 
          className={styles.container} 
          aria-label="Main"
          >
          <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={tspOptions} className={styles.tsParticles} />
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logo}>
            <img src={navLogo} width="46px" alt={siteTitle}/>
            </span>
            <span className={styles.navigationItem}>{siteTitle}</span>
          </Link>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/services" activeClassName="active">
                Services
              </Link>
            </li>
            {/* <li className={styles.navigationItem}>
              <Link to="/technology" activeClassName="active">
                Tech
              </Link>
            </li> */}
            <li className={styles.navigationItem}>
              <Link to="/about/" activeClassName='active'>
                About
              </Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/contact/" activeClassName='active'>
                Contact
              </Link>
            </li>

          </ul>
        </nav>
      </>
    )
  }
}

export default Navigation
