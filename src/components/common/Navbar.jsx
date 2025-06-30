import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import MyContex from '../../context';


const Navbar = () => {
  const status = useContext(MyContex).status;
  const user = useContext(MyContex).user;
  return (
    <div>
      <div id='navbar'>
      <Link className='link' to="homePage"><i class="fa-solid fa-house"></i>דף הבית</Link>
      <Link className='link' to="about"><i class="fa-solid fa-circle-info"></i>אודות</Link>
      <Link className='link' to="contact"><i class="fa-solid fa-comments"></i>יצירת קשר</Link>
      <Link className='link' to="products"><i class="fa-solid fa-bag-shopping"></i>מוצרים</Link>
      <Link className='link' to="shoppingCart"><i class="fa-solid fa-cart-shopping"></i>עגלה</Link>
      <Link className='link' to="logIn"><i class="fa-solid fa-user"></i>{status=="loggedIn" ? <span>שלום ל: {user.userName}</span> : <span>הירשם/התחבר</span>}</Link>
      </div>
    </div>
  )
}

export default Navbar;