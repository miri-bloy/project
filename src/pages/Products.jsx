import React from 'react'
import ProductCard from '../components/products/ProductCard';
import AddProduct from '../components/products/AddProduct';

const Products = ({ allProduct, setAllProduct, addProductToCart}) => {
  return (
    <div>
      {allProduct.map(p =>
        <ProductCard allProduct={allProduct} productToShow={p} addProductToCart={addProductToCart}/>)}
        {/*user==maneger &&*/<AddProduct setAllProduct={setAllProduct} allProduct={allProduct}/>}
    </div>
  )
}

export default Products;