import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard';

const Products = ({ allProduct, addProductToCart, setAllProduct }) => {

  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProduct); 

  useEffect(() => {
    setFilteredProducts(allProduct);
  }, [allProduct]);

  const search = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    const newFilteredArr = allProduct.filter(p =>
      p.name.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredProducts(newFilteredArr); 
  }
  return (
    <div id='allProducts'>
      <div id='search'>
        <input type="text" onChange={(e) => search(e)} value={searchValue} />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div id='Products'>
        {filteredProducts.length==0
        && <h3>מצטערים, הפרטי המבוקש לא נמצא...</h3>}
        {filteredProducts.map(p =>
          <ProductCard allProduct={filteredProducts} productToShow={p} addProductToCart={addProductToCart} />)}
      </div>
    </div>
  )
}

export default Products;