import React from 'react'
import './popular.css'
import  { useState, useEffect } from 'react';
import Item from '../item/Item'
import axios from 'axios';

const Popular = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://ecommerce-mern-stack-okqn.onrender.com/relatedproduct')
      .then(res => {
        console.log('Response:', res); // Log the entire response object
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error('Invalid data received:', res);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  console.log("All product",products);

  return (
    <>
      <div className="popular">
        <h1>Popular in Women</h1>
        <hr/>
        <div className="popular-item">
            {products.map((item,i)=>
            {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> 
            })}
        </div>
      </div>
    </>
  )
}

export default Popular
