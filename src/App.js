import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartProvider, useCart } from "react-use-cart";


function App() {
  return (
    <div className="container mt-2 mb-2">
       <CartProvider>
         <div className="row mt-2 mb-2">
           <div className="col-md-8 mt-2 mb-2">
              <Products/>
           </div>
           <div className="col-md-2 mt-2 mb-2">
            <Cart/>
           </div>

         </div>
      </CartProvider>

    </div>
  );
}

export default App;
