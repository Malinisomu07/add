import React, {useState}  from 'react';
// import '../Styles/crud.css';
import { Link} from 'react-router-dom';


function Crud(props) {
    const { setNewProduct, newProduct, addProduct, products, updateProduct } = props;
    const [updatingProductId, setUpdatingProductId] = useState(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState('');
  
    const handleUpdate = (productID) => {
      setUpdatingProductId(productID);
    };

    const saveUpdate = (productID) => {
        if (updatedName !== '' && updatedPrice !== '') {
          updateProduct(productID, { name: updatedName, price: updatedPrice });
          setUpdatingProductId(null);
          setUpdatedName('');
          setUpdatedPrice('');
        }
      };


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
      <div>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.ID}>
              {product.name} - {product.price}
              {updatingProductId === product.ID ? (
                <div>
                  <input
                    type="text"
                    placeholder="Updated Name"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Updated Price"
                    value={updatedPrice}
                    onChange={(e) => setUpdatedPrice(e.target.value)}
                  />
                  <button onClick={() => saveUpdate(product.ID)}>Save</button>
                </div>
              ) : (
                <button onClick={() => handleUpdate(product.ID)}>Update</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Crud;