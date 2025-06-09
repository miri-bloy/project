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
    { id: 1, name: "הדפסת כלבלב ופרחים", img: "1.jpg", price: 65 },
    { id: 2, name: "הדפסת גור כלבים ולבבות", img: "2.jpg", price: 65 },
    { id: 3, name: "הדפסת פאג ועצם", img: "3.jpg", price: 65 },
    { id: 4, name: "הדפסת דובים ופטריות", img: "4.jpg", price: 65 },
    { id: 5, name: "הדפסת איילים ועלים", img: "5.jpg", price: 65 },
    { id: 6, name: "הדפסת קאפקייק כדורגל", img: "6.jpg", price: 65 },
    { id: 7, name: "הדפסת כלב בבית ציפורים", img: "7.jpg", price: 65 },
    { id: 8, name: "הדפסת פנדה עם כתר", img: "8.jpg", price: 65 },
    { id: 9, name: "הדפסת ארנב ושעון", img: "9.jpg", price: 65 },
    { id: 10, name: "הדפסת פנדה חמודה", img: "10.jpg", price: 65 },
    { id: 11, name: "הדפסת כלבלב ופרחים", img: "11.jpg", price: 65 },
    { id: 12, name: "הדפסת גור כלבים ולבבות", img: "12.jpg", price: 65 },
    { id: 13, name: "הדפסת פאג ועצם", img: "13.jpg", price: 65 },
    { id: 14, name: "הדפסת דובים ופטריות", img: "14.jpg", price: 65 },
    { id: 15, name: "הדפסת איילים ועלים", img: "15.jpg", price: 65 },
    { id: 16, name: "הדפסת קאפקייק כדורגל", img: "16.jpg", price: 65 },
    { id: 17, name: "הדפסת כלב בבית ציפורים", img: "17.jpg", price: 65 },
    { id: 18, name: "הדפסת פנדה עם כתר", img: "18.jpg", price: 65 },
    { id: 19, name: "הדפסת ארנב ושעון", img: "19.jpg", price: 65 },
    { id: 20, name: "הדפסת פנדה חמודה", img: "20.jpg", price: 65 },
    { id: 21, name: "הדפסת כלבלב ופרחים", img: "21.jpg", price: 65 },
    { id: 22, name: "הדפסת גור כלבים ולבבות", img: "22.jpg", price: 65 },
    { id: 23, name: "הדפסת פאג ועצם", img: "23.jpg", price: 65 },
    { id: 24, name: "הדפסת דובים ופטריות", img: "24.jpg", price: 65 },
    { id: 25, name: "הדפסת איילים ועלים", img: "25.jpg", price: 65 },
    { id: 26, name: "הדפסת קאפקייק כדורגל", img: "26.jpg", price: 65 },
    { id: 27, name: "הדפסת כלב בבית ציפורים", img: "27.jpg", price: 65 },
    { id: 28, name: "הדפסת פנדה עם כתר", img: "28.jpg", price: 65 },
    { id: 29, name: "הדפסת ארנב ושעון", img: "29.jpg", price: 65 },
    { id: 30, name: "הדפסת פנדה חמודה", img: "30.jpg", price: 65 },
    { id: 31, name: "הדפסת כלבלב ופרחים", img: "31.jpg", price: 65 },
    { id: 32, name: "הדפסת גור כלבים ולבבות", img: "32.jpg", price: 65 },
    { id: 33, name: "הדפסת פאג ועצם", img: "33.jpg", price: 65 },
    { id: 34, name: "הדפסת דובים ופטריות", img: "34.jpg", price: 65 },
    { id: 35, name: "הדפסת איילים ועלים", img: "35.jpg", price: 65 },
    { id: 36, name: "הדפסת קאפקייק כדורגל", img: "36.jpg", price: 65 },
    { id: 37, name: "הדפסת כלב בבית ציפורים", img: "37.jpg", price: 65 },
    { id: 38, name: "הדפסת פנדה עם כתר", img: "38.jpg", price: 65 },
    { id: 39, name: "הדפסת ארנב ושעון", img: "39.jpg", price: 65 },
    { id: 40, name: "הדפסת פנדה חמודה", img: "40.jpg", price: 65 },
    { id: 41, name: "הדפסת כלבלב ופרחים", img: "41.jpg", price: 65 },
    { id: 42, name: "הדפסת גור כלבים ולבבות", img: "42.jpg", price: 65 },
    { id: 43, name: "הדפסת פאג ועצם", img: "43.jpg", price: 65 },
    { id: 44, name: "הדפסת דובים ופטריות", img: "44.jpg", price: 65 },
    { id: 45, name: "הדפסת איילים ועלים", img: "45.jpg", price: 65 },
    { id: 46, name: "הדפסת קאפקייק כדורגל", img: "46.jpg", price: 65 },
    { id: 47, name: "הדפסת כלב בבית ציפורים", img: "47.jpg", price: 65 },
    { id: 48, name: "הדפסת פנדה עם כתר", img: "48.jpg", price: 65 },
    { id: 49, name: "הדפסת ארנב ושעון", img: "49.jpg", price: 65 },
    { id: 50, name: "הדפסת פנדה חמודה", img: "50.jpg", price: 65 },
    { id: 51, name: "הדפסת כלבלב ופרחים", img: "51.jpg", price: 65 },
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