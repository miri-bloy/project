import React, { useContext, useState } from 'react'
import MyContex from '../context';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const allUsers = useContext(MyContex).allUsers;
  const addUser = useContext(MyContex).addUser;
  const user = useContext(MyContex).user;
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
    <div>
      {status == "loggedIn"
        ? <button onClick={logOut}>התנתק</button>
        : <div>
          <h2>logIn</h2>
          <form>
            <span>email</span>
            <input type="email" placeholder='email' onChange={(e) => updateCurrentUser("email", e.target.value)} value={currentUser.email} />
            <span>password</span>
            <input type="password" placeholder='password' onChange={(e) => updateCurrentUser("password", e.target.value)} value={currentUser.password} />
            <button type='button' onClick={logIn}>logIn</button>
          </form>
          <h2>signUp</h2>
          <form>
            <span>userName</span>
            <input type="text" placeholder='userName' onChange={(e) => updateNewUser("userName", e.target.value)} value={newUser.userName} />
            <span>email</span>
            <input type="email" placeholder='email' onChange={(e) => updateNewUser("email", e.target.value)} value={newUser.email} />
            <span>password</span>
            <input type="password" placeholder='password' onChange={(e) => updateNewUser("password", e.target.value)} value={newUser.password} />
            <button type='button' onClick={signUp}>signUp</button>
          </form>
          <details>
          <summary>כניסת מנהל</summary>
          {status != "manager" ? <div>
            <input type="password" placeholder='הכנס סיסמה לזיהוי'
              onChange={(e) => updatePassword(e.target.value)} value={managerPassword} />
            <button onClick={managerLogIn}>התחברות</button>
          </div>
            : <div>
              <button onClick={() => navigate('/productManagement')}>מעבר לדף הגדרות מערכת</button>
              <button onClick={() => setStatus("")}>התנתק</button>
            </div>}
        </details>
        </div>}
      <div>
        
      </div>
      
    </div>
  )
}

export default LogIn;