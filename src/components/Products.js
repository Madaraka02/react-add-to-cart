import React, { useState } from 'react'
import { CartProvider, useCart } from "react-use-cart";
import 'bootstrap/dist/css/bootstrap.min.css';


function Products() {
  const { addItem } = useCart();

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Shirt",
      category: "Clothes",
      price: "300",
    },
    {
      id: 2,
      title: "Trouser",
      category: "Clothes",
      price: "100",
    },
    {
      id: 3,
      title: "Iphone 13",
      category: "Electronics",
      price: "20000",
    },
    {
      id: 4,
      title: "Study desk",
      category: "Funiture",
      price: "5500",
    },
    {
      id: 5,
      title: "Chair",
      category: "Funiture",
      price: "6000",
    },
  ]);

  const [search, setSearch] = useState("");

  const searchProducts = products.filter((product) => {
    if (
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    ) {
      return product;
    }
  });
  
  return (
    <div className="container mt-4 mb-4">
            <input
          className="input"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <div className="row mt-2 mb-2">
        <div className="col-md-10 mt-2 mb-2"></div>


          {searchProducts.map((product) => (
          <div className="col-md-3 mt-2 mb-2">
            <div className="card shadow-lg">
              <div className="card-body">

             
            <p className="card-text">{product.title}</p>
            <p className="card-text">ksh :{product.price}</p>
            <p className="text-sm text-muted card-text">{product.category}</p>

            <button className="btn btn-warning btn-sm" onClick={() => addItem(product)}>Add to cart</button>
            </div>
            </div>

          </div>
        ))}
          <div className="col-md-2 mt-2 mb-2"></div>

        </div>
        {/* {products.map((p) => (
          <div key={p.id}>
            <h6>
            <button onClick={() => addItem(p)}>Add to cart</button>
          </div>
        ))} */}
    </div>
  )
}

export default Products
