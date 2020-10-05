import React from "react";

import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div style={{margin: "10px",padding: "20px", border: "2px solid gray"}}>
      <ProductList />
      <hr></hr>
      <ShoppingCart />
    </div>
  );
}

export default App;
