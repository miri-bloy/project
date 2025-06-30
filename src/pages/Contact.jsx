import React, { useContext, useState } from 'react'
import MyContex from '../context';

const Contact = () => {

  const status = useContext(MyContex).status;
  const user = useContext(MyContex).user;
  const setUser = useContext(MyContex).setUser;
  const allMessage = user.messages;

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
    const id = allMessage.length > 0
      ? allMessage[allMessage.length - 1].idMessage + 10
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
    <div id='contact'>
      <h1>יצירת קשר</h1>
      <div id='contact-items'>
        <div className='contact-item'>
          <h3><i class="fa-solid fa-location-dot"></i>מיקום: </h3>
          <p>כיכר דיזנגוף תל אביב, ישראל</p>
        </div>
        <div className='contact-item'>
          <h3><i class="fa-solid fa-phone"></i>טלפון: </h3>
          <p>1-800-100-100</p>
        </div>
        <div className='contact-item'>
          <h3><i class="fa-solid fa-headset"></i>שירות לקוחות: </h3>
          <p>support@printly.co.il</p>
        </div>
        <div className='contact-item'>
          <h3><i class="fa-solid fa-globe"></i>אתר רשמי: </h3>
          <p> www.printly.co.il</p>
        </div>
      </div>
      {status != "loggedIn" ? <div>
        <h3>שליחת פניה </h3>
        <form>
          <div>
            <span>שם </span><br />
            <input type="text" onChange={(e) => updateMessage("name", e.target.value)} value={newMessage.name} /><br />
            <span>טלפון </span><br />
            <input type="text" onChange={(e) => updateMessage("phone", e.target.value)} value={newMessage.phone} /><br />
            <span>מייל </span><br />
            <input type="email" onChange={(e) => updateMessage("email", e.target.value)} value={newMessage.email} /><br />
          </div>
          <span>הודעה</span>
          <textarea rows={7} cols={20} onChange={(e) => updateMessage("message", e.target.value)} value={newMessage.message} />
          <button onClick={(e) => SendMessage(e)} type='button'>שלח</button>
        </form>
      </div>
        : <div className='contact-item'>
          <h3>שליחת פניה חדשה</h3>
          <form>
            <span>הודעה</span><br />
            <textarea rows={7} cols={20} onChange={(e) => updateMessage("message", e.target.value)} value={newMessage.message} />
            <button onClick={(e) => SendMessage(e)} type='button'>שלח</button>
          </form>
          <div>
            {allMessage.length != 0 && <div>
              <h2>הפניות הקודמות שלי</h2>
              {allMessage.map(m => <div id='allMessage'>
                <div className='message message-mine'>
                  <b>הודעה מספר: </b>{m.idMessage}
                  <b> מתאריך: </b>{m.date}
                  <b> מאת: </b>{user.userName}<br />
                  <b>תוכן ההודעה: </b>{m.message}
                </div>
                {m.answer != "" && <div className='message-their'>
                  תגובה מספר: <b>{m.answerId}</b>
                  בתאריך: <b>{m.answerDate}</b>
                  תוכן התגובה: <b>{m.answer}</b>
                </div>}
              </div>)}
            </div>}
          </div>
        </div>}
    </div>
  )
}

export default Contact;