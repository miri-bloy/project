import React from 'react'

const ShoppingCartItem = ({productToShow,removeProductFromCart, plus, minus }) => {
  return (
    <div className='cart-product'>
      <div className='item-name'><h3>{productToShow.name}</h3></div>
      <p>{productToShow.price*productToShow.quantity}₪</p>
      <button onClick={()=>minus(productToShow)}>-</button>
      <span>{productToShow.quantity}</span>
      <button onClick={()=>plus(productToShow)}>+</button><br /><br />
      <img src={"/images/shirts/"+productToShow.img}/>
      <button onClick={()=>removeProductFromCart(productToShow)}><i class="fa-solid fa-trash"></i></button>
    </div>
  )
}

export default ShoppingCartItem;