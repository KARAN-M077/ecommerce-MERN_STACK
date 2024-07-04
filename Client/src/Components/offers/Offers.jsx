import React from 'react'
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div>
      <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt='exclusive_image.png'/>
        </div>
      </div>
    </div>
  )
}

export default Offers
