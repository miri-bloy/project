import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="homePage">דף הבית</Link>
      <Link to="about">אודות</Link>
      <Link to="contact">יצירת קשר</Link>
      <Link to="products">מוצרים</Link>
      <Link to="shoppingCart">עגלה</Link>
      <Link to="logIn">הירשם/התחבר</Link>
    </div>
  )
}

export default Navbar;