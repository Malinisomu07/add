import React, { useReducer, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Crud from './Crud';
import ProductList from './ProductList';

const ProductDetails = [];

function productReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];

    case 'DELETE_PRODUCT':
      return state.filter(product => product.ID !== action.payload);

    case 'UPDATE_PRODUCT':
      return state.map(product =>
        product.ID === action.payload.ID ? { ...product, ...action.payload.updatedProduct } : product
      );

    // case 'FETCH_PRODUCTS':
    //   return  action.payload
        

    default:
      return state;
  }
}

function App() {
  const [products, dispatch] = useReducer(productReducer, ProductDetails);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
  });

// useEffect(() =>{
//   fetch('/api/products')
//   .then(response => response.json())
//   .then(product => 
//     dispatch({type: 'FETCH_PRODUCTS', payload:product})
//   )
//   .catch(error => {
//     console.log(error)
//   });
// },[])


  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      dispatch({
        type: 'ADD_PRODUCT',
        payload: { ...newProduct, ID: Date.now() },
      });
      setNewProduct({
        name: '',
        price: '',
      });
    }
  };

  const deleteProduct = (productID) => {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: productID,
    });
  };

  const updateProduct = (productID, updatedProduct) => {
    dispatch({
      type: 'UPDATE_PRODUCT',
      payload: {
        ID: productID,
        updatedProduct: updatedProduct,
      },
    });
  };

  const productUpdate = (productID) => {
    const updatedName = prompt('Enter updated name:');
    const updatedPrice = prompt('Enter updated price:');

    if (updatedName !== null && updatedPrice !== null) {
      updateProduct(productID, { Name: updatedName, price: updatedPrice });
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Crud setNewProduct={setNewProduct} newProduct={newProduct} addProduct={addProduct} />} />
        <Route path="/ProductList" element={<ProductList products={products} productUpdate={productUpdate} deleteProduct={deleteProduct} />} />
      </Routes>

      {/* <div>
        <h2>API Data</h2>
        {products.map(item =>(
          <li key ={item.id}>{item.name},{item.price}</li>
        ))}
      </div> */}
          </BrowserRouter>
  );
}

export default App;
