import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // create state
  const [plants, setPlants] = useState([]);

  // add state variable for 'search option'
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
    // console.log(plants)) // 7 plants data
  }, []);

  // callback function from plant page to new plant form component
  function handleAddPlant(newPlant) {
    // setPlants array (new plants) with existing array
    const updatedPlantsArray = [...plants, newPlant];
    setPlants(updatedPlantsArray);
    // console.log(newPlant);
  }

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {/*<PlantList plants={plants} /> */}{" "}
      {/*} map and passing it down to plant list */}
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;

// The setter is what re-triggers your component to re-render on the page, plants = data; but the page would just stay the same,
// so the set triggers react to re-render when you set the state twice, start with empty array [] then set happens, AND then
// the state twice like it starts on that empty one and then the setter happens and then it calls your component again so we see that console.log again and the state is updated.
