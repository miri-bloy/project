import React from 'react'

const PaymentDetails = ({setCardNumber,price}) => {
  return (
    <div>
      <form action="#" id="paymentForm">
        <h2>Payment Details</h2>
        <div id="name" >
          <h6>שם בעל הכרטיס</h6>
          <input type="text" />
        </div>
        <div id="cardNum">
          <h6>מספר כרטיס</h6>
          <input type="text" onBlur={(e)=>setCardNumber(e.target.value)}/>
        </div>
        <div id="validYear" >
          <h6>תוקף</h6>
          <input type="text" />
        </div>
        <div id="cvv">
          <h6>cvv</h6>
          <input type="text" />
        </div>
        <h4>חיוב על סך: <b>{price}</b></h4>
      </form>
    </div>
  )
}

export default PaymentDetails