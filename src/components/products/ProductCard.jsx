import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({productToShow, addProductToCart}) => {

  const navigate = useNavigate();
  const handleViewDetails = (product) => {
    navigate(`/productDetails/${product.id}`); 
  };
  return (
    <div className='product-card' onClick={()=>handleViewDetails(productToShow)}>
      <div className='title'><h3>{productToShow.name}</h3></div>
      <img src={"/images/shirts/"+productToShow.img}/>
      <p>₪{productToShow.price}</p>
      <button onClick={(e)=>addProductToCart(e,productToShow)}>הוסף לסל</button>
    </div>
  )
}

export default ProductCard;