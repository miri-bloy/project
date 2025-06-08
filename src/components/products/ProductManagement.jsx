import React, { useState } from 'react'

const ProductManagement = ({ allProduct, setAllProduct }) => {

  const [productToUpdate, setProductToUpdate] = useState({
    name: "",
    img: "",
    price: 0
  });

  const [productToAdd, setProductToAdd] = useState({
    name: "",
    img: "",
    price: 0
  });

  const updateProduct = (type, value) => {
    setProductToUpdate(prevData => ({
      ...prevData,
      [type]: value,
    }));
  };

  const saveProduct = (id) => {
    const updatedProduct = { id: id, ...productToUpdate };
    const updatedProducts = allProduct.map(p =>
      p.id == id
        ? updatedProduct
        : p
    );
    setAllProduct(updatedProducts);
    setProductToUpdate({ name: "", img: "", price: 0 });
  };

  const updateProductToAdd = (type, value) => {
    setProductToAdd(prevData => ({
      ...prevData,
      [type]: value,
    }));
  };

  const removeProduct = (id) => {
    const filteredArr = allProduct.filter(p => p.id != id);
    setAllProduct(filteredArr);
  };

  const addProduct = () => {
    const newId=allProduct.length>0? allProduct[allProduct.length-1].id+1:1;
    const fullProductToAdd = { id: newId, ...productToAdd };
    setAllProduct([...allProduct,fullProductToAdd]);
    setProductToAdd({ name: "", img: "", price: 0 });
  };

  return (
    <div>
      <div>
        {allProduct.map(p =>
          <div>
            <h3>קוד: {p.id}, שם: {p.name}, מחיר: {p.price}, ניתוב תמונה: {p.img}</h3>
            <button onClick={() => { removeProduct(p.id) }}>מחיקה</button>
            <details>
              <summary onClick={() => setProductToUpdate(p)}>עריכה</summary>
              <form>
                <input type="text" placeholder='name' onChange={(e) => { updateProduct("name", e.target.value) }} value={productToUpdate.name} />
                <input type="text" placeholder='price' onChange={(e) => { updateProduct("price", Number(e.target.value)) }} value={productToUpdate.price} />
                <input type="text" placeholder='img' onChange={(e) => { updateProduct("img", e.target.value) }} value={productToUpdate.img} />
                <button type='button' onClick={() => saveProduct(p.id)}>עדכן</button>
              </form>
            </details>
          </div>
        )}
      </div>
      <h2>טופס הוספת מוצר לאתר</h2>
      <form>
        <input type="text" placeholder='name' onChange={(e) => { updateProductToAdd("name", e.target.value) }} value={productToAdd.name} />
        <input type="text" placeholder='price' onChange={(e) => { updateProductToAdd("price", Number(e.target.value)) }} value={productToAdd.price} />
        <input type="text" placeholder='img' onChange={(e) => { updateProductToAdd("img", e.target.value) }} value={productToAdd.img} />
        <button type='button' onClick={addProduct}>הוסף</button>
      </form>
    </div>
  )
}

export default ProductManagement;