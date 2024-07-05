import React from 'react';
import Navbar from './Components/navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Shop from './Components/shop/Shop';
import ShopCategory from './Components/shop/ShopCategory';
import Product from './Components/shop/Product';
import Cart from './Components/shop/Cart';
import Loginsingup from './Components/shop/Loginsingup';
import Footer from './Components/footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory category="Men" />}></Route>
          <Route path='/womens' element={<ShopCategory category="Women" />}></Route>
          <Route path='/kids' element={<ShopCategory category="Kids" />}></Route>
          <Route path='/product'>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<Loginsingup />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
