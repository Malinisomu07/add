import React from 'react';
import { Link } from 'react-router-dom';

function ProductList(props) {

  const {deleteProduct, productUpdate, products} = props

  return (
    <div className='container'>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.ID}>
            {product.name} - {product.price}
            <button onClick={() => deleteProduct(product.ID)}>Delete</button>
            <button onClick={() => productUpdate(product.ID)}>Update</button>
          </li>
        ))}
      </ul>
      <Link to = "/">
      <button> Go Back</button>

      </Link>
    </div>
  );
}

export default ProductList;
