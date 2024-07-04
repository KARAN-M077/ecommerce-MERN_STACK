
import React, { useState, useEffect } from 'react';
import './shopcategory.css';
import Item from '../item/Item';
import axios from 'axios';

const ShopCategory = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://ecommerce-9243.onrender.com/allproducts')
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
    <div>
      <div className="shopcategory">
      {products.map((item, i) => {
        if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          
        })}



      </div>
    </div>
  );
};

export default ShopCategory;



