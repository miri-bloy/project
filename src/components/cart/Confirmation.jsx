import React from 'react'

const Confirmation = ({cardNumber, price, shippingData}) => {
  return (
    <div>
      <h1>אישור חיוב</h1>
      <p>בוצע חיוב של {price} $</p>
      <p>מכרטיס מספר xxxx-xxxx-xxxx-{cardNumber.slice(-4)}</p>
      <h2>פרטי הכתובת למשלוח כפי שנקלט במערכת:</h2>
      <p>{shippingData.address} {shippingData.building}, {shippingData.city}, {shippingData.country}</p>
    </div>
  )
}

export default Confirmation;