import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const PaymentDetails = ({ setCardNumber, price }) => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    cardHolderName: '',
    idNumber: '', 
    cardNumber: '',
    expiryDate: '', 
    cvv: '',
  });

  const updatePaymentData = (field, value) => {
    setPaymentData(prevData => ({
      ...prevData,
      [field]: value,
    }));

    if (field === 'cardNumber') {
      setCardNumber(value);
    }

  };
  const payment=()=>{
    alert("התשלום בוצע בהצלחה!👍");
  };
  return (
    <div id="paymentDetails">
      <form id="paymentForm">
        <h2>פרטי תשלום</h2> 

        <div className="form-row">
          <div className="input-group">
            <h6>שם בעל הכרטיס</h6>
            <input
              type="text"
              placeholder="שם מלא כפי שמופיע בכרטיס"
              value={paymentData.cardHolderName}
              onChange={(e) => updatePaymentData('cardHolderName', e.target.value)}
            />
          </div>
          <div className="input-group">
            <h6>תעודת זהות</h6>
            <input
              type="text"
              placeholder="מספר תעודת זהות"
              value={paymentData.idNumber}
              onChange={(e) => updatePaymentData('idNumber', e.target.value)}
            />
          </div>
        </div>

        <div className="form-row full-width-input"> 
          <div className="input-group">
            <h6>מספר כרטיס</h6>
            <input
              type="text"
              placeholder="מספר כרטיס אשראי (16 ספרות)"
              value={paymentData.cardNumber}
              onChange={(e) => updatePaymentData('cardNumber', e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <h6>תוקף (MM/YY)</h6>
            <input
              type="text"
              placeholder="חודש / שנה"
              value={paymentData.expiryDate}
              onChange={(e) => updatePaymentData('expiryDate', e.target.value)}
            />
          </div>
          <div className="input-group">
            <h6>CVV</h6>
            <input
              type="text"
              placeholder="3 או 4 ספרות בגב הכרטיס"
              value={paymentData.cvv}
              onChange={(e) => updatePaymentData('cvv', e.target.value)}
            />
          </div>
        </div>

        <h4>חיוב על סך: <b>{price}</b> ₪</h4>
        <button type='button' onClick={()=>payment()}>אישור ותשלום</button>
      </form>
    </div>
  );
};

export default PaymentDetails;