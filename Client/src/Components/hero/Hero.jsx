import React from 'react'
import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import banner from '../assets/banner.png'
const Hero = () => {
  return (
    <div>
      <div className="hero">
         <div className="hero-left">
            <div>
              <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt='hand_icon.png'/>
              </div>
              <p>Collections</p>
              <p>for EveryOne</p>
            </div>
            <div className="hero-latest-btt">
              Latest Collections
              <img src={arrow} alt='arrow_icon.png'/>
            </div>

         </div>
         <div className="hero-right">
            <img src={banner} alt='heroimg.png'/>
         </div>
      </div>
    </div>
  )
}

export default Hero
