import logo from './logo.svg';
// import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartProvider, useCart } from "react-use-cart";
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <div className="container mt-2 mb-2">
       <CartProvider>
       <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

      </CartProvider>

    </div>
  );
}

export default App;
