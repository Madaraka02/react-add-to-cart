import React, { useState } from 'react'
import { CartProvider, useCart } from "react-use-cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillArrowRightCircleFill, BsFillCartFill } from "react-icons/bs";
import './Product.css'
import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import Sliding from './Sliding';






function Products() {
  
  const { addItem, totalUniqueItems } = useCart();

  const [products, setProducts] = useState([
    {
      id: 1,
      image:'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/B/144458_1647450047.jpg',
      title: "Shirt",
      category: "Clothes",
      price: "300",
    },
    {
      id: 2,
      image:'https://www.collinsdictionary.com/images/thumb/trousers_29362489_250.jpg',
      title: "Trouser",
      category: "Clothes",
      price: "100",
    },
    {
      id: 3,
      image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg',
      title: "Iphone 13",
      category: "Electronics",
      price: "20000",
    },
    {
      id: 4,
      image:'https://images-na.ssl-images-amazon.com/images/I/31OIEjjrtNS.jpg',
      title: "Study desk",
      category: "Funiture",
      price: "5500",
    },
    {
      id: 5,
      image:'https://dignity.co.ke/wp-content/uploads/2021/08/Zen-h_back-black-@14500_Front-scaled.jpg',
      title: "Chair",
      category: "Funiture",
      price: "6000",
    },
    {
      id: 6,
      image:'https://www.collinsdictionary.com/images/thumb/trousers_29362489_250.jpg',
      title: "Trouser",
      category: "Clothes",
      price: "100",
    },
    {
      id: 7,
      image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg',
      title: "Trouser",
      category: "Clothes",
      price: "100",
    },
    {
      id: 8,
      image:'https://images-na.ssl-images-amazon.com/images/I/31OIEjjrtNS.jpg',
      title: "Trouser",
      category: "Clothes",
      price: "100",
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
    <div className=" prod container mt-4 mb-4">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input className="form-control sach border-warning" type="search" placeholder="Search product" 
                      onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                      }}
            aria-label="Search"/>
          </form>
          <a href="/cart" style={{textDecoration:'none', color:'#FCA510'}}>
            <AiOutlineShoppingCart /> 
            ({totalUniqueItems})</a>
        </div>
      </nav>

            {/* <input
          className="input"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        /> */}
        <div className="row mt-2 mb-2">
        <div className="col-md-1 mt-2 mb-2"></div>

        <div className="col-md-10 mt-2 mb-2">
        <div className="row mt-2 mb-2">



          {searchProducts.map((product) => (
          <div className=" col-md-3 mt-2 mb-2">
            <div className="card product">
            <span class="badge bad position-absolute top-0 start-100 translate-middle bg-warning"><small>{product.category}</small></span>
              <div className="card-body">
                <img src={product.image} className="pic img-fluid"/>

             
            <p className="title card-text text-center text-sm">{product.title}</p>
            <p className="price card-text text-center text-sm">ksh :{product.price}</p>
            <p className="category text-sm text-muted card-text text-center text-sm">{product.category}</p>
            
            <a className="btn stretched-link bad add btn-outline-warning btn-sm btn-block" onClick={() => addItem(product)}>
              <AiOutlineArrowRight />
            </a>
            </div>
            </div>

          </div>
        ))}
        </div>
        </div>
          <div className="col-md-1 mt-2 mb-2"></div>

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
