import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({productToShow, addProductToCart}) => {

  const navigate = useNavigate();
  const handleViewDetails = (product) => {
    navigate(`/productDetails/${product.id}`); 
  };
  return (
    <div className='product-card' onClick={()=>handleViewDetails(productToShow)} style={{backgroundColor: "red", padding: "20px"}}>
      <h3>{productToShow.name}</h3>
      <img src={"/shirts/"+productToShow.img}/>
      <p>{productToShow.price}</p>
      <button onClick={(e)=>addProductToCart(e,productToShow)}>addProductToCart</button>
    </div>
  )
}

export default ProductCard;