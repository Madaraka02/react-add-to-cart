import React from 'react'
import { CartProvider, useCart } from "react-use-cart";


function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      if (isEmpty) return <p className="text-sm">Your cart is empty</p>;
  return (
    <div className="container mt-4 mb-4">
    <h6 className="text-sm">Cart ({totalUniqueItems})</h6>
    
  <table class="table">
  <thead>
    <tr>
      <th scope="col"><p className="text-sm">Item</p></th>
      <th scope="col"><p className="text-sm">Quantity</p></th>
      <th scope="col"><p className="text-sm">Add</p></th>
      <th scope="col"><p className="text-sm">Remove</p></th>
      <th scope="col"><p className="text-sm">Delete</p></th>
    </tr>
  </thead>
  {items.map((item) => (
  <tbody>
    <tr key={item.id}>
      <td>
        <p className="text-sm">{item.title}</p>
      </td>
      <td>
        <p className="text-sm">{item.quantity}</p>
      </td>
      <td>
      <button className="btn btn-outline-primary btn-sm"
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
      </td>
      <td>
      <button className="btn btn-outline-danger btn-sm"
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
      </td>
      <td>
      <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.id)}>&times;</button>
      </td>
    </tr>
  </tbody>
  ))}
</table>
  </div>
  )
}

export default Cart