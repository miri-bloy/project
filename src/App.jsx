import { useState } from 'react';
import './App.css';
import AppRoutes from './components/common/AppRoutes';

function App() {

  const [allUsers, setAllUsers] = useState([
  ]);
  
  const addUser=(newUser)=>{
    setAllUsers(prevUsers => [...prevUsers, newUser]);
  };

  const [user, setUser] = useState({
    userName: '',
    email: '',
    password:'',
    messages: [],
  });

  const [status, setStatus] = useState("");

  const store = {
    allUsers: allUsers,
    addUser: addUser,
    user: user,
    setUser: setUser,
    status: status,
    setStatus: setStatus,
  };

  const [allProduct, setAllProduct] = useState([
    { id: 1, name: "x", img: "y", price: 10 },
    { id: 2, name: "xx", img: "yy", price: 10 },
    { id: 3, name: "xxx", img: "yyy", price: 10 }
  ]);

  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (event, productToAdd) => {
    event.stopPropagation();
    const sameProduct = cartProducts.find(p => p.id === productToAdd.id)
    if (sameProduct) {
      setCartProducts(prevCartItems => {
        return prevCartItems.map(p =>
          p.id === productToAdd.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      });
    }
    else {
      setCartProducts(prevCartItems => [...prevCartItems, { ...productToAdd, quantity: 1 }]);
    }
    alert("המוצר " + productToAdd.name + " נוסף בהצלחה");
  };

  const removeProductFromCart = (productToRemove) => {
    if (productToRemove) {
      alert("המוצר " + productToRemove.name + " הוסר בהצלחה");
      const filterCart = cartProducts.filter(p => p.id != productToRemove.id);
      setCartProducts(filterCart);
    }
  };

  const plus = (productToUpdate) => {
    setCartProducts(prevCartItems => {
      return prevCartItems.map(p =>
        p.id === productToUpdate.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    });
  };

  const minus = (productToUpdate) => {
    if (productToUpdate.quantity > 1) {
      setCartProducts(prevCartItems => {
        return prevCartItems.map(p =>
          p.id === productToUpdate.id
            ? { ...p, quantity: p.quantity - 1 }
            : p
        );
      });
    }
    else {
      removeProductFromCart(productToUpdate);
    }
  };

  return (
    <div className="App">
      <AppRoutes
        store={store}
        allProduct={allProduct}
        setAllProduct={setAllProduct}
        cartProducts={cartProducts}
        addProductToCart={addProductToCart}
        removeProductFromCart={removeProductFromCart}
        plus={plus}
        minus={minus} />
    </div>
  );
}

export default App;