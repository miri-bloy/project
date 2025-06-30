import React from 'react'
import ShoppingCartItem from './ShoppingCartItem';


const MyOrder = ({ cartProducts, removeProductFromCart, plus, minus, setPrice }) => {
  let countItems = 0;
  let sumPrice = 0;
  cartProducts.forEach(p => {
    countItems += p.quantity;
    sumPrice += (p.price * p.quantity);
  });
  setPrice(sumPrice);
  return (
    <div>
      <h3>my order</h3>
      <div id='myOrder'>
        <div id='allItems'>
          {cartProducts.map(p =>
            <ShoppingCartItem productToShow={p} removeProductFromCart={removeProductFromCart} plus={plus} minus={minus} />
          )}
        </div>
        <div id='allDetails'>
          <div id='details'>
            <p>כמות מוצרים: <b>{countItems}</b></p>
            <p>סה"כ לתשלום: <b>{sumPrice}</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrder;