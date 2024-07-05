import React, { createContext } from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';



export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://ecommerce-mern-stack-okqn.onrender.com/allproducts')
      .then(res => {
        console.log('Response:', res); 
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
  const allproduct = products
    const contextValue = { allproduct };
console.log("context",contextValue)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;