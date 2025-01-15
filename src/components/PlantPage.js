import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant, updatePlants, search}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} updatePlants={updatePlants}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
