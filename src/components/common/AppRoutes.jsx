import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Products from '../../pages/Products';
import ShoppingCart from '../../pages/ShoppingCart';
import LogIn from '../../pages/LogIn';
import ProductDetails from '../products/ProductDetails';



const AppRoutes = ({allProduct,setAllProduct,cartProducts,addProductToCart,removeProductFromCart,plus,minus}) => {
  return (
    <div>
      <Routes>
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products allProduct={allProduct} setAllProduct={setAllProduct} addProductToCart={addProductToCart}/> } />
        <Route path='/productDetails/:productId' element={
          <ProductDetails allProduct={allProduct} addProductToCart={addProductToCart}/>}/>
        <Route path='/shoppingCart' element={<ShoppingCart cartProducts={cartProducts} removeProductFromCart={removeProductFromCart} plus={plus} minus={minus}/>} />
        <Route path='/logIn' element={<LogIn />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;