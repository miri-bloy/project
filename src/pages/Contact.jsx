import React, { useState } from 'react'

const Contact = () => {

  const [allMessage, setAllMessage] = useState([
  ]);

  const [newMessage, setNewMessage] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    message: '',
    date: '',
    answer: '',
    answerDate: '',
  });

  const updateMessage = (type, value) => {
    setNewMessage(prev => ({
      ...prev,
      [type]: value,
    }))
  };

  const SendMessage = (event) => {
    event.preventDefault();
    const now = new Date();
    const dateString = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    const id = 23100 + setAllMessage.length + 1;
    const fullMessage = {
      ...newMessage,
      date: dateString,
      id: id,
    };
    setAllMessage(prevMessages => [...prevMessages, fullMessage]);
    setNewMessage({
      id: 0,
      name: '',
      phone: '',
      email: '',
      message: '',
      date: '',
      answer: '',
      answerDate: '',
    });
  };

  return (
    <div style={{ direction: "rtl" }}>
      <h1>יצירת קשר</h1>
      <div>
        <div>
          <h3>מיקום: </h3>
          <p>כיכר דיזנגוף תל אביב, ישראל</p>
        </div>
        <div>
          <h3>טלפון: </h3>
          <p>123456789 0000000000</p>
        </div>
        <div>
          <h3>שירות לקוחות: </h3>
          <p>AAA@AAA</p>
        </div>
        <div>
          <h3>אתר רשמי: </h3>
          <p> www.exemple.co.il</p>
        </div>
      </div>
      <div>
        <h2>למשתמשים לא רשומים:</h2>
        <h3>שליחת פניה </h3>
        <form>
          <div>
            <span>שם</span>
            <input type="text" onChange={(e) => updateMessage("name", e.target.value)} value={newMessage.name} />
            <span>טלפון</span>
            <input type="text" onChange={(e) => updateMessage("phone", e.target.value)} value={newMessage.phone} />
            <span>מייל</span>
            <input type="email" onChange={(e) => updateMessage("email", e.target.value)} value={newMessage.email} />
          </div>
          <span>הודעה</span>
          <textarea rows={7} cols={70} onChange={(e) => updateMessage("message", e.target.value)} value={newMessage.message} />
          <button onClick={(e) => SendMessage(e)} type='button'>שלח</button>
        </form>
      </div>
      <div>
        <h2>למשתמשים רשומים:</h2>
        <h3>שליחת פניה חדשה</h3>
        <form>
          <span>הודעה</span>
          <textarea rows={7} cols={70} onChange={(e) => updateMessage("message", e.target.value)} value={newMessage.message} />
          <button onClick={(e) => SendMessage(e)} type='button'>שלח</button>
        </form>
        {/*allMessage.length > 0 && */<div>
          <h2>הפניות הקודמות שלי</h2>
          {allMessage.map(p => <div>
            <div>
              הודעה מספר: <b>{p.id}</b>
              מתאריך: <b>{p.date}</b>
              שם: <b>{p.name}</b>
              הודעה: <b>{p.message}</b>
              תגובה: <b>{p.message}</b>
            </div>
          </div>)}
        </div>}
      </div>
    </div>
  )
}

export default Contact;