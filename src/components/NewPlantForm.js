import React, { useState } from "react";
import PlantPage from "./PlantPage";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // make the POST request
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      }),
    })
      .then((response) => response.json())
      // .then(console.log);
      .then((newPlant) => onAddPlant(newPlant));
    // add new PLANTS on the page, find where all plants are kept in state, and updating the new array to state
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
