import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Products from '../../pages/Products';
import ShoppingCart from '../../pages/ShoppingCart';
import LogIn from '../../pages/LogIn';
import ProductDetails from '../products/ProductDetails';
import MyOrder from '../cart/MyOrder';
import ShippingDetails from '../cart/ShippingDetails';
import PaymentDetails from '../cart/PaymentDetails';
import Confirmation from '../cart/Confirmation';



const AppRoutes = ({allProduct,setAllProduct,addProductToCart}) => {
  return (
    <div>
      <Routes>
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/conect' element={<Contact />} />
        <Route path='/products' element={<Products allProduct={allProduct} setAllProduct={setAllProduct} addProductToCart={addProductToCart}/> } />
        <Route path='/productDetails/:productId' element={
          <ProductDetails allProduct={allProduct} addProductToCart={addProductToCart}/>}/>
        <Route path='/shoppingCart' element={<ShoppingCart />} >
          <Route path='myOrder' element={<MyOrder/>} />
          <Route path='shippingDetails' element={<ShippingDetails/>} />
          <Route path='paymentDetails' element={<PaymentDetails/>} />
          <Route path='confirmation' element={<Confirmation/>} />
        </Route>
        <Route path='/logIn' element={<LogIn />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;