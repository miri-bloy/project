import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({productToShow, addProductToCart}) => {

  const navigate = useNavigate();
  const handleViewDetails = (product) => {
    navigate(`/productDetails/${product.id}`); 
  };
  return (
    <div className='productCard' onClick={()=>handleViewDetails(productToShow)} style={{backgroundColor: "red", padding: "20px"}}>
      <h3>{productToShow.name}</h3>
      <img src={productToShow.img}/>
      <p>{productToShow.price}</p>
      <button onClick={()=>addProductToCart(productToShow)}></button>
    </div>
  )
}

export default ProductCard;