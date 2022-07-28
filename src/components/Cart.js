import React from 'react'
import { CartProvider, useCart } from "react-use-cart";



function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
      } = useCart();
    
      if (isEmpty) return <p className="text-sm">Your cart is empty</p>;
  return (
    <div className="container mt-4 mb-4">
            <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" style={{textDecoration:'none'}}>Home</a>
        </div>
      </nav>
      <div className="row mt-4 mb-4">
<div className="col-md-2"></div>
        <div className="col-md-8">
    <h6 className="text-sm">Cart ({totalUniqueItems})
    <span className="text-sm float-end">Cart total : ksh {cartTotal}</span></h6>

    
  <table class="table">
  <thead>
    <tr>
      <th scope="col"><p className="text-sm">Item</p></th>
      <th scope="col"><p className="text-sm">Quantity</p></th>
      <th scope="col">Action</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {items.map((item) => (
  <tbody>
    <tr key={item.id}>
      <td>
        <small className="text-sm">{item.title}</small>
      </td>
      <td>
        <p className="text-sm">{item.quantity}</p>
      </td>
      <td>
      <button className="btn btn-outline-primary btn-sm m-2"
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>

      <button className="btn btn-outline-danger btn-sm m-2"
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>

      <button className="btn btn-outline-danger btn-sm m-2" onClick={() => removeItem(item.id)}>&times;</button>
      </td>
    </tr>

  </tbody>
  ))}
</table>
</div>
<div className="col-md-2"></div>
</div>
  </div>
  )
}

export default Cart