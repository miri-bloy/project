import React, { useContext, useState } from 'react'
import MyContex from '../context';

const Contact = () => {

  const status = useContext(MyContex).status;
  const user = useContext(MyContex).user;
  const setUser = useContext(MyContex).setUser;
  const allMessage=user.messages;

  const [newMessage, setNewMessage] = useState({
    idMessage: 0,
    name: '',
    phone: '',
    email: '',
    message: '',
    date: '',
    answerId: '',
    answer: '',
    answerDate: '',
  });

  const updateMessage = (type, value) => {
    setNewMessage(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  const SendMessage = (event) => {
    event.preventDefault();
    const now = new Date();
    const dateString = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    const id = allMessage.length>0 
    ? allMessage[allMessage.length-1].idMessage + 10 
    : 23100 + 10;
    const fullMessage = {
      ...newMessage,
      date: dateString,
      idMessage: id,
    };
    setUser(prevUser => ({
      ...prevUser,
      messages: [...prevUser.messages, fullMessage] 
    }));
    setNewMessage({
      idMessage: 0,
      name: '',
      phone: '',
      email: '',
      message: '',
      date: '', 
      answerId: '',
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
      {status != "loggedIn" ? <div>
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
        : <div>
          <h3>שליחת פניה חדשה</h3>
          <form>
            <span>הודעה</span><br />
            <textarea rows={7} cols={70} onChange={(e) => updateMessage("message", e.target.value)} value={newMessage.message} />
            <button onClick={(e) => SendMessage(e)} type='button'>שלח</button>
          </form>
          <div>
            <h2>הפניות הקודמות שלי</h2>
            {allMessage.map(m => <div>
              <div>
                הודעה מספר: <b>{m.idMessage}</b>
                מתאריך: <b>{m.date}</b>
                שם: <b>{m.name}</b><br />
                הודעה: <b>{m.message}</b>
              </div>
              {m.answer != "" && <div>
                תגובה מספר: <b>{m.answerId}</b>
                בתאריך: <b>{m.answerDate}</b>
                הודעה: <b>{m.answer}</b>
              </div>}
            </div>)}
          </div>
        </div>}
    </div>
  )
}

export default Contact;