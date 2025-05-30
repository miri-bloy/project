import React from 'react'

const ShoppingCartItem = ({productToShow,removeProductFromCart, plus, minus }) => {
  return (
    <div className='cart-item'>
      <h3>{productToShow.name}</h3>
      <img src={productToShow.img}/>
      <p>{productToShow.price}</p>
      <button onClick={()=>minus(productToShow)}>-</button>
      <span>{productToShow.quantity}</span>
      <button onClick={()=>plus(productToShow)}>+</button>
      <button onClick={()=>removeProductFromCart(productToShow)}>removeProductFromCart</button>
    </div>
  )
}

export default ShoppingCartItem;