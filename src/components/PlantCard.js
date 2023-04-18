import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  // destructure
  // no need for backend, front end so plant card only
  const [inStock, setInStock] = useState(true); // state for sold out/ in stock , true for in stock

  function handleChangeInStock() {
    setInStock((InStock) => !inStock); //"!" will toggle from in stock to out of stock
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? ( // replace
        <button onClick={handleChangeInStock} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleChangeInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
