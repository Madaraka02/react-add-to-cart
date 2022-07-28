import React from 'react'
import './Cart.css'

import { CartProvider, useCart } from "react-use-cart";
import { BsDashCircle, BsPlusCircle, BsXCircle } from 'react-icons/bs';



function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart
      } = useCart();
    
      if (isEmpty) return(
        <>
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="text-dark head text-uppercase" >Home</a>
        </div>
      </nav>
      <p className="text-sm text-center">Your cart is empty</p>
        </>
      ) ;
  return (
    <div className="container mt-4 mb-4">
            <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="text-dark head text-uppercase" >Home</a>
        </div>
      </nav>
      <div className="row mt-4 mb-4">
<div className="col-md-2"></div>
        <div className="col-md-8">
    <h6 className="text-sm">Cart ({totalUniqueItems})
    <span className="text-sm float-end">Cart total : ksh {cartTotal}</span></h6>

  <div className="card shadow-lg">
  <div className="card-body">

  {items.map((item) => (
    <div key={item.id} 
    className="container">
      <div className='row mt-2 mb-2 justify-content-between shadow-sm p-2'>

    <div className='col-md-4'>
    <small className="text-sm">{item.title}</small>
    </div>
    <div className='col-md-4 '>  

          <BsDashCircle size={20} style={{marginLeft:20, marginRight:20}} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}/>

    {item.quantity}
          <BsPlusCircle size={20} style={{marginLeft:20}} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}/>

 
    </div>
    <div className='col-md-4'>
        <BsXCircle size={20} style={{color:'red', marginRight:'auto'}} onClick={() => removeItem(item.id)}/>
        {/* <BsXCircle size={20} onClick={() => emptyCart()}/> */}

      </div>

    </div>
    </div>


  ))}
    </div>  
    </div>  

</div>
<div className="col-md-2"></div>
</div>
  </div>
  )
}

export default Cart