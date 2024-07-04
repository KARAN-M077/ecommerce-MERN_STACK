import React, { useContext } from 'react'
import Displayproduct from '../Displayproduct/Displayproduct'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'
import Relatedproduct from '../Relatedproduct/Relatedproduct'


const Product = () => {
  const {allproduct} = useContext(ShopContext);
  console.log("product-page :",allproduct);
  const {productId} = useParams();
  console.log("product-id",productId)
  const product = allproduct.find((e)=> e.id === parseInt(productId));
  console.log("new product",product)
  return (
    <div>
      <Displayproduct product={product}/>
      <Relatedproduct />
      
    </div>
  )
}

export default Product
