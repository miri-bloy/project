import { useState } from 'react';
import './App.css';
import AppRoutes from './components/common/AppRoutes';
import Navbar from './components/common/Navbar';


function App() {

  const [allProduct, setAllProduct]=useState([
    {id:1, name:"x",img:"y" , price:0}
  ]);

  const addProductToCart=(productToAdd)=>{
    alert("המוצר "+productToAdd.name+" נוסף בהצלחה");
  }

  return (
    <div className="App">
      <Navbar/>
      <AppRoutes
      allProduct={allProduct} 
      setAllProduct={setAllProduct}
      addProductToCart={addProductToCart}/>
    </div>
  );
}

export default App;