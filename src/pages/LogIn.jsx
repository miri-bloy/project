import React, { useContext, useState } from 'react'
import MyContex from '../context';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const allUsers = useContext(MyContex).allUsers;
  const addUser = useContext(MyContex).addUser;
  const setUser = useContext(MyContex).setUser;
  const status = useContext(MyContex).status;
  const setStatus = useContext(MyContex).setStatus;

  const navigate = useNavigate();
  const [managerPassword, setManagerPassword] = useState("");
  const updatePassword = (value) => {
    setManagerPassword(value)
  }

  const managerLogIn = () => {
    if (managerPassword == "m12345") {
      setStatus("manager");
      navigate('/productManagement');
    }
  }

  const [currentUser, setCurrentUser] = useState({
    email: '',
    password: '',
  });

  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    password: '',
    messages: [],
  });

  const updateNewUser = (type, value) => {
    setNewUser(prevData => ({
      ...prevData,
      [type]: value,
    }))
  };

  const updateCurrentUser = (type, value) => {
    setCurrentUser(prevData => ({
      ...prevData,
      [type]: value,
    }))
  };

  const logIn = () => {
    const findUser = allUsers.find(u => u.email == currentUser.email);
    if (findUser) {
      if (findUser.password == currentUser.password) {
        setUser(newUser);
        setStatus("loggedIn");
      }
      else {
        alert("סיסמה שגויה")
      }
    }
    else {
      alert("מייל לא מזוהה")
    }
  };

  const signUp = () => {
    setUser(newUser);
    addUser(newUser);
    setStatus("loggedIn");
  }

  const logOut = () => {
    setUser({
      userName: '',
      password: '',
      email: '',
      messages: [],
    });
    setStatus("");
  };



  return (
    <div id='logIn'>
      {status == "loggedIn"
        ? <button onClick={logOut} id='logOut'>התנתק</button>
        : <div id='logInCards'>
          <div className='logIn-card'>
          <h2>logIn</h2>
          <form id='form1'>
            <span>email</span><br />
            <input type="email" placeholder='email' onChange={(e) => updateCurrentUser("email", e.target.value)} value={currentUser.email} /><br />
            <span>password</span><br />
            <input type="password" placeholder='password' onChange={(e) => updateCurrentUser("password", e.target.value)} value={currentUser.password} /><br />
            <button type='button' onClick={logIn}>logIn</button>
          </form>
          </div>
          <div className='logIn-card'>
          <h2>signUp</h2>
          <form id='form2'>
            <span>userName</span><br />
            <input type="text" placeholder='userName' onChange={(e) => updateNewUser("userName", e.target.value)} value={newUser.userName} /><br />
            <span>email</span><br />
            <input type="email" placeholder='email' onChange={(e) => updateNewUser("email", e.target.value)} value={newUser.email} /><br />
            <span>password</span><br />
            <input type="password" placeholder='password' onChange={(e) => updateNewUser("password", e.target.value)} value={newUser.password} /><br />
            <button type='button' onClick={signUp}>signUp</button>
          </form>
          </div>
          <div className='logIn-card'>
          <h2><i class="fa-solid fa-user-secret"></i>כניסת מנהל</h2>
          {status != "manager" ? <div>
            <input type="password" placeholder='הכנס סיסמה לזיהוי'
              onChange={(e) => updatePassword(e.target.value)} value={managerPassword} /><br/>
            <button onClick={managerLogIn}>התחברות ומעבר להגדרות</button>
          </div>
            : <div>
              <button onClick={() => navigate('/productManagement')}>מעבר לדף הגדרות מערכת</button>
              <button onClick={() => setStatus("")}>התנתק</button>
            </div>}
        </div>
        </div>}
      <div>
        
      </div>
      
    </div>
  )
}

export default LogIn;