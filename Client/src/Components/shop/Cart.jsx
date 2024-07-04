import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://ecommerce-9243.onrender.com/cartitems')
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
  const updateQuantityInDB = (productId, newQuantity) => {
    return axios.post('https://ecommerce-9243.onrender.com/updatecart', { productId, quantity: newQuantity });
  };
  const incrementQuantity = (index) => {
    const newProducts = [...products];
    const newQuantity = newProducts[index].quantity + 1;
    updateQuantityInDB(newProducts[index]._id, newQuantity)
      .then(() => {
        newProducts[index].quantity = newQuantity;
        setProducts(newProducts);
        toast.success("Quantity increased!!",{autoClose:800,});
      })
      .catch(error => {
        console.error('Error updating quantity:', error);
      });
  };

  const decrementQuantity = (index) => {
    const newProducts = [...products];
    const newQuantity = newProducts[index].quantity - 1;
    toast.error("Quantity decreased!!",{autoClose:800,}); 
    if (newQuantity === 0) {
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure you want to remove this product?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              updateQuantityInDB(newProducts[index]._id, newQuantity)
                .then(() => {
                  newProducts.splice(index, 1); // Remove the product if the quantity is 0
                  setProducts(newProducts);
                  toast.success('Product removed from cart successfully!');
                })
                .catch(error => {
                  console.error('Error updating quantity:', error);
                  toast.error('Failed to update product quantity.');
                });
            }
          },
          {
            label: 'No'
          }
        ]
      });
    } else {
      updateQuantityInDB(newProducts[index]._id, newQuantity)
        .then(() => {
          newProducts[index].quantity = newQuantity;
          setProducts(newProducts);
        })
        .catch(error => {
          console.error('Error updating quantity:', error);
        });
    }
  };

  const placeOrder = () => {
    confirmAlert({
      title:'Order Placed Sucessfully',
      message:'Your Product will reach you soon',
      
    })
    console.log('Place order for:', products);
  };

  console.log("All products in the cart", products);

  return (
    <div className="cartproduct">
      <h1>My Cart</h1>
      <br/>
      <div className="cartproduct-item">
        {products.map((item, i) => (
          <div key={item._id} className="product-details">
            <img src={item.image} alt="cart image"/>
            <div className='inside-product-details'>
              <h3>{item.name}</h3>
              <h5 >Quantity: {item.quantity}</h5>
              <div className="quantity-controls" style={{paddingTop:'10px'}}>
                <button className="sub" onClick={() => decrementQuantity(i)}>-</button>
                <button className="add" onClick={() => incrementQuantity(i)}>+</button>
                <button className="place-order-button" onClick={placeOrder}>Place Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cart;
