import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = ({allProduct, addProductToCart}) => {
  const { productId } = useParams(); 
  const productToShow=allProduct.find(p=>p.id=productId);
  return (
    <div className='currentProduct'>
      <div className='name'><h3>{productToShow.name}</h3></div>
      <img src={"/images/shirts/"+productToShow.img}/>
      <p>₪{productToShow.price}</p>
      <button onClick={(e)=>addProductToCart(e,productToShow)}>הוסף לסל</button>
    </div>
  )
}

export default ProductDetails;