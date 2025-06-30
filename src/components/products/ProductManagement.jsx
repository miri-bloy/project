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
    const newId = allProduct.length > 0 ? allProduct[allProduct.length - 1].id + 1 : 1;
    const fullProductToAdd = { id: newId, ...productToAdd };
    setAllProduct([...allProduct, fullProductToAdd]);
    setProductToAdd({ name: "", img: "", price: 0 }); 
  };

  return (
    <div className='product-management-container'>
      <h2 style={{ textAlign: 'center' }}>ניהול מוצרים</h2>

      <div className='product-list'>
        {allProduct.map(p =>
          <div key={p.id} className='product-item'>
            <h3>קוד: {p.id}, שם: {p.name}, מחיר: {p.price} ₪, ניתוב תמונה: {p.img}</h3>
            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
              <button type='button' onClick={() => { removeProduct(p.id) }}>מחיקה</button>
              <details>
                <summary onClick={() => setProductToUpdate(p)}>עריכה</summary>
                <form>
                  <input
                    type="text"
                    placeholder='שם מוצר'
                    onChange={(e) => { updateProduct("name", e.target.value) }}
                    value={productToUpdate.name}
                  />
                  <input
                    type="number" 
                    placeholder='מחיר'
                    onChange={(e) => { updateProduct("price", Number(e.target.value)) }}
                    value={productToUpdate.price}
                  />
                  <input
                    type="text"
                    placeholder='נתיב תמונה'
                    onChange={(e) => { updateProduct("img", e.target.value) }}
                    value={productToUpdate.img}
                  />
                  <button type='button' onClick={() => saveProduct(p.id)}>עדכן</button>
                </form>
              </details>
            </div>
          </div>
        )}
      </div>

      <h2>טופס הוספת מוצר חדש לאתר</h2>
      <form className='add-product-form'>
        <input
          type="text"
          placeholder='שם מוצר'
          onChange={(e) => { updateProductToAdd("name", e.target.value) }}
          value={productToAdd.name}
        />
        <input
          type="number" 
          placeholder='מחיר'
          onChange={(e) => { updateProductToAdd("price", Number(e.target.value)) }}
          value={productToAdd.price}
        />
        <input
          type="text"
          placeholder='נתיב תמונה'
          onChange={(e) => { updateProductToAdd("img", e.target.value) }}
          value={productToAdd.img}
        />
        <button type='button' onClick={addProduct}>הוסף</button>
      </form>
    </div>
  );
}

export default ProductManagement;