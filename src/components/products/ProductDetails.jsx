import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = ({allProduct, addProductToCart}) => {
  const { productId } = useParams(); 
  const productToShow=allProduct.find(p=>p.id=productId);
  return (

    <div>
      <h3>{productToShow.name}</h3>
      <img src={productToShow.img}/>
      <p>{productToShow.price}</p>
      <button onClick={(e)=>addProductToCart(e,productToShow)}>addProductToCart</button>
    </div>
  )
}

export default ProductDetails;