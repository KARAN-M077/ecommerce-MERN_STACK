
import React from 'react'
import './newcollection.css'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../item/Item'
const Newcollection = () => {
  const [collection, setCollection] = useState([]);
  
  useEffect(() => {
    axios.get('https://ecommerce-mern-stack-okqn.onrender.com/newcollection')
      .then(res => {
        console.log('Response:', res); // Log the entire response object
        if (Array.isArray(res.data)) {
          setCollection(res.data);
        } else {
          console.error('Invalid data received:', res);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  console.log(collection);
  return (
    
    <div>
      <div className="new-collection">
        <h1>New COllection</h1>
        <hr/>
        <div className="collections">
            {collection.map((item,i)=>
            {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default Newcollection
