import React from 'react'
import { useCart } from 'react-use-cart';

function Checkout() {
        const {
            isEmpty,
            totalUniqueItems,
            items,
            updateItemQuantity,
            removeItem,
          } = useCart();
  return (
    <div>Checkout</div>
  )
}

export default Checkout;