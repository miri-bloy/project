import React from 'react'
import ProductCard from '../components/products/ProductCard';

const Products = ({ allProduct, addProductToCart}) => {
  return (
    <div>
      {allProduct.map(p =>
        <ProductCard allProduct={allProduct} productToShow={p} addProductToCart={addProductToCart}/>)}
    </div>
  )
}

export default Products;