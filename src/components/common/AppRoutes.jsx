import React from 'react'
import HomePage from '../../pages/HomePage';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Products from '../../pages/Products';
import ShoppingCart from '../../pages/ShoppingCart';
import LogIn from '../../pages/LogIn';
import ProductDetails from '../products/ProductDetails';
import Navbar from './Navbar';
import ProductManagement from '../products/ProductManagement';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Myprovider } from '../../context';




const AppRoutes = ({ store, allProduct, setAllProduct, cartProducts, addProductToCart, removeProductFromCart, plus, minus }) => {
  return( 
    <div>
      <Myprovider value={store}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/homePage' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products allProduct={allProduct} addProductToCart={addProductToCart} />} />
            <Route path='/productDetails/:productId' element={<ProductDetails allProduct={allProduct} addProductToCart={addProductToCart} />} />
            <Route path='/shoppingCart' element={<ShoppingCart cartProducts={cartProducts} removeProductFromCart={removeProductFromCart} plus={plus} minus={minus} />} />
            <Route path='/logIn' element={<LogIn />}/>
            <Route path='/productManagement' element={<ProductManagement allProduct={allProduct} setAllProduct={setAllProduct}/>}/>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Myprovider>
    </div>
  )
}

export default AppRoutes;