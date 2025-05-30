import React from 'react'
import ShoppingCartItem from './ShoppingCartItem';


const MyOrder = ({ cartProducts, removeProductFromCart, plus, minus }) => {
  console.log(cartProducts);
  return (
    <div>
      <h3>my order</h3>
      {cartProducts.map(p=>
        <ShoppingCartItem productToShow={p} removeProductFromCart={removeProductFromCart} plus={plus} minus={minus}/>
      )}
    </div>
  )
}

export default MyOrder;