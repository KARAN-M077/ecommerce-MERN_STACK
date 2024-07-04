import React from 'react';
import './displayproduct.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Displayproduct = (props) => {
  const { product } = props;

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('https://ecommerce-mern-stack-okqn.onrender.com/addtocart', {
        _id: product._id,
        name: product.name,
        image: product.image
      });
      console.log(response.data.message);
      toast.success('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('Failed to add product to cart.');
    }
  };

  return (
    <>
      <div className="productdisplay">
        <h1>{product.name}</h1>
        <div className="product-description">
          {product.description}
        </div>
        <div className="product-left">
          <div className="product-img-list">
            <img src={product.image} alt='product.png'/>
            <img src={product.image} alt='product.png'/>
            <img src={product.image} alt='product.png'/>
            <img src={product.image} alt='product.png'/>
            <img src={product.image} alt='product.png'/>
          </div>
          <div className="product-img">
            <img className='product-main' src={product.image} alt='product.png'/>
          </div>
        </div>
        <div className="product-right">
          <div className="product-price">
            <div className="new-price">${product.new_price}</div>
            <div className="old-price">${product.old_price}</div>
          </div>
          <div className="product-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Displayproduct;
