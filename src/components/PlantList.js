import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  // destructure
  console.log(plants); // check to see if its in plant list 7 plants
  const plantCards = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
      /> // what do we want to return for every object of this array? render a plant card
    );
  });
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantCards}
    </ul> // invoke the plant cards
  );
}

export default PlantList;
