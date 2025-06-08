import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import MyContex from '../../context';


const Navbar = () => {
  const status = useContext(MyContex).status;
  const user = useContext(MyContex).user;
  return (
    <div>
      <Link to="homePage">דף הבית</Link>
      <Link to="about">אודות</Link>
      <Link to="contact">יצירת קשר</Link>
      <Link to="products">מוצרים</Link>
      <Link to="shoppingCart">עגלה</Link>
      <Link to="logIn">הירשם/התחבר</Link>
      {status=="loggedIn" && <h4>שלום ל: {user.userName}</h4>}
    </div>
  )
}

export default Navbar;