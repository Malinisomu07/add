import React  from 'react';
// import '../Styles/crud.css';
import { Link} from 'react-router-dom';


function Crud(props) {
  const {setNewProduct, newProduct, addProduct} = props
 
  return (
    <div className='container'>
      
      <div>
        <h2>Add New Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
        <br />
        <br />
        <button onClick={addProduct}>Add Product</button>
        
        <Link to={{ pathname: "/ProductList"}}>
        <button >Show Product</button>
        </Link>

      </div>

    </div>
  );
}

export default Crud;
