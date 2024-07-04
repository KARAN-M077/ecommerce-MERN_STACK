import React from 'react'

import Popular from '../popular/Popular'
import Offers from '../offers/Offers'
import Newcollection from '../Newcollection.jsx/Newcollection'
import Swiper from '../slider/Swiper'


const Shop = () => {
  return (
    <div>
      <Swiper/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      
      
    </div>
  )
}

export default Shop
