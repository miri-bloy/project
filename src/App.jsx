import { useState } from 'react';
import './App.css';
import AppRoutes from './components/common/AppRoutes';
import Navbar from './components/common/Navbar';


function App() {

  const [allProduct, setAllProduct] = useState([
    { id: 1, name: "x", img: "y", price: 10 }
  ]);

  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (event,productToAdd) => {
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
  }

  const removeProductFromCart = (productToRemove) => {
    if (productToRemove) {
      alert("המוצר " + productToRemove.name + " הוסר בהצלחה");
      const filterCart = cartProducts.filter(p => p.id != productToRemove.id)
      setCartProducts(filterCart);
    }
  }

  const plus = (productToUpdate ) => {
    setCartProducts(prevCartItems => {
      return prevCartItems.map(p =>
        p.id === productToUpdate .id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    });
  }

  const minus = (productToUpdate ) => {
    if (productToUpdate .quantity > 1) {
      setCartProducts(prevCartItems => {
        return prevCartItems.map(p =>
          p.id === productToUpdate .id
            ? { ...p, quantity: p.quantity - 1 }
            : p
        );
      });
    }
    else{
      removeProductFromCart(productToUpdate);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <AppRoutes
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