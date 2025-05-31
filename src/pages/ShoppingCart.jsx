import React, { useState } from 'react'
import MyOrder from '../components/cart/MyOrder';
import ShippingDetails from '../components/cart/ShippingDetails';
import PaymentDetails from '../components/cart/PaymentDetails';
import Confirmation from '../components/cart/Confirmation';


const ShoppingCart = ({ cartProducts, removeProductFromCart, plus, minus }) => {

  const [shippingData, setShippingData]=useState({
    firstName: '',
    lastName: '',
    address: '',
    building: '',
    zipCode: '',
    country: '',
    city: '',
  });

  const updateData=(type, value)=>{
    setShippingData(prevData => ({
      ...prevData,
      [type]: value,
    }))
  }

  const steps = [
    { id: 1, name: 'ההזמנה שלי', component: <MyOrder cartProducts={cartProducts} removeProductFromCart={removeProductFromCart} plus={plus} minus={minus}/> },
    { id: 2, name: 'פרטי משלוח', component: <ShippingDetails shippingData={shippingData} updateData={updateData}/> },
    { id: 3, name: 'פרטי תשלום', component: <PaymentDetails /> },
    { id: 4, name: 'אישור הזמנה', component: <Confirmation /> },
  ]

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const stepBack=()=>{
    setCurrentStepIndex(current=>current-1);
  }

  const stepForward=()=>{
    setCurrentStepIndex(current=>current+1);
  }

  return (
    <div>
      <nav>{steps.map(s => <span className={s===steps[currentStepIndex]?"cart-item current":"cart-item" } >{s.name}</span>)}</nav>
      <div>{steps[currentStepIndex].component}</div>
      <button onClick={()=>stepBack()} disabled={steps[currentStepIndex].id === 1}>הקודם</button>
      <button onClick={()=>stepForward()} disabled={steps[currentStepIndex].id === 4}>הבא</button>
    </div>
  )
}

export default ShoppingCart;