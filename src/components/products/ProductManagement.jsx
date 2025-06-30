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
    setProductToUpdate({ name: "", img: "", price: 0 }); // איפוס הסטייט לאחר שמירה
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
    setProductToAdd({ name: "", img: "", price: 0 }); // איפוס הסטייט לאחר הוספה
  };

  return (
    // ה-class הראשי לעוטף הקומפוננטה כולה
    <div className='product-management-container'>
      <h2 style={{ textAlign: 'center' }}>ניהול מוצרים</h2> {/* כותרת ראשית */}

      {/* מיכל שמכיל את רשימת המוצרים הקיימים */}
      <div className='product-list'>
        {allProduct.map(p =>
          // כל פריט מוצר בודד
          <div key={p.id} className='product-item'>
            <h3>קוד: {p.id}, שם: {p.name}, מחיר: {p.price} ₪, ניתוב תמונה: {p.img}</h3>
            {/* עוטף עבור כפתורי הפעולה, כדי לסדר אותם בצורה טובה יותר */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
              <button type='button' onClick={() => { removeProduct(p.id) }}>מחיקה</button>
              <details>
                <summary onClick={() => setProductToUpdate(p)}>עריכה</summary>
                {/* טופס עריכת מוצר */}
                <form>
                  <input
                    type="text"
                    placeholder='שם מוצר'
                    onChange={(e) => { updateProduct("name", e.target.value) }}
                    value={productToUpdate.name}
                  />
                  <input
                    type="number" // סוג number למחיר
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

      {/* כותרת לטופס הוספת מוצר */}
      <h2>טופס הוספת מוצר חדש לאתר</h2>
      {/* טופס הוספת מוצר חדש */}
      <form className='add-product-form'>
        <input
          type="text"
          placeholder='שם מוצר'
          onChange={(e) => { updateProductToAdd("name", e.target.value) }}
          value={productToAdd.name}
        />
        <input
          type="number" // סוג number למחיר
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