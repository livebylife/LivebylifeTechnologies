import React from 'react'
import * as styles from './particle-effect.module.css'
import ParticleAnimation from './particle-effect.module'

class ParticleEffect extends React.Component{
    render(){
        const {children} = this.props
    return (
        <div className={styles.canvasWrap}>
            <ParticleAnimation 
                className={styles.ParticleAnimation} 
                numParticles={40} 
                color={{
                    r:255,
                    g:115,
                    b:0,
                    a:200
                }}
                lineWidth={0.5}
                particleRadius={0.8}
                particleSpeed={0.6} 
            />
            <div className={styles.overlay}>
                {children}
            </div>
        </div>
    )
    }
}

export default ParticleEffect