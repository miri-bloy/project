import React, { useState } from 'react';
import MyOrder from '../components/cart/MyOrder';
import ShippingDetails from '../components/cart/ShippingDetails';
import PaymentDetails from '../components/cart/PaymentDetails';
import Confirmation from '../components/cart/Confirmation';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContex from '../context';


const ShoppingCart = ({ cartProducts, removeProductFromCart, plus, minus }) => {

  const status = useContext(MyContex).status;
  const navigate = useNavigate();

  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    building: '',
    zipCode: '',
    country: '',
    city: '',
  });

  const updateData = (type, value) => {
    setShippingData(prevData => ({
      ...prevData,
      [type]: value,
    }));
  };

  const [price, setPrice] = useState(0);

  const [cardNumber, setCardNumber] = useState("1234");

  const steps = [
    { id: 1, name: 'ההזמנה שלי', component: <MyOrder cartProducts={cartProducts} removeProductFromCart={removeProductFromCart} plus={plus} minus={minus} setPrice={setPrice} /> },
    { id: 2, name: 'פרטי משלוח', component: <ShippingDetails shippingData={shippingData} updateData={updateData} /> },
    { id: 3, name: 'פרטי תשלום', component: <PaymentDetails setCardNumber={setCardNumber} price={price} /> },
    { id: 4, name: 'אישור הזמנה', component: <Confirmation cardNumber={cardNumber} price={price} shippingData={shippingData} /> },
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const stepBack = () => {
    setCurrentStepIndex(current => current - 1);
  };

  const stepForward = () => {
    setCurrentStepIndex(current => current + 1);
  };



  return (
    <div>
      <nav>{steps.map(s => <span className={s === steps[currentStepIndex] ? "cart-item current" : "cart-item"} >{s.name}</span>)}</nav>
      <div>{steps[currentStepIndex].component}</div>
      {status == "loggedIn" ?
        <div>
          <button onClick={() => stepBack()} disabled={steps[currentStepIndex].id === 1}>הקודם</button>
          <button onClick={() => stepForward()} disabled={steps[currentStepIndex].id === 4}>הבא</button>
        </div>
        : <div>
          <p>לא ניתן לסיים הזמנה מבלי להירשם קודם, מעבר ל<button onClick={() => navigate('/logIn')}>דף הרשמה</button><br /></p>
        </div>}
    </div>
  )
}

export default ShoppingCart;