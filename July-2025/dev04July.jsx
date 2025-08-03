
// Child Component written in different file
import React from 'react'
import App from './dev28July-ang/app'

const ProductCatalogue = (product) => {
  return (
    <div className="productCard">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        Rs <strike>{product.mrp}</strike>
        &nbsp;
        {product.sellingPrice}
      </p>
    </div>
  );
}

// export default ProductCatalogue;


// Parent Component
import React from "react";
import ProductCatalogue from "./ProductCatalogue";
const App = () => {
  return (
    <>
      {" "}
      <div className="heading">
        <h1>Domino's Pizza</h1>
        <p>Want to repeat?</p>
      </div>
      <div className="container">
        <ProductCatalogue
          name="Big Big 6in1 Pizza"
          description="6 bestseller Pizzas in 1 | 24 slices| Perfect for Squad Goals"
          mrp={1669}
          sellingPrice={949}
        />
        <button className="add-button">Add</button>
      </div>
      <div className="container">
        <ProductCatalogue
          name="Farmhouse Cheese Burst"
          description="Now in 3 Exciting Flavours - Molten Cheese of onion, capsicum, tomato & grilled mushroom"
          mrp={449}
          sellingPrice={348}
        />
        <button className="add-button">Add</button>
      </div>
      <div className="container">
        <ProductCatalogue
          name="Peppy Paneer Cheese Burst"
          description="Now in 3 New Flavours - Nolten Cheese Indulgence with Flavorful trio of juicy paneer, crisp capsicum & spciy red paprika"
          mrp={449}
          sellingPrice={358}
        />
        <button className="add-button">Add</button>
      </div>
    </>
  );
};

export default App;
