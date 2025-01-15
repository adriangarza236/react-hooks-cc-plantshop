import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useEffect, useState } from "react";


function App() {

  const [ plants, setPlants ] = useState([])
  const [ search, setSearch ] = useState("")
  const [ allPlants, setAllPlants ] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => {
      setPlants(data)
    setAllPlants(data)
  })
  }, [])

  function addPlant(plant) {
    setPlants([...plants, plant])
    setAllPlants([...allPlants, plant])
  }
  function updatePlants(search) {
    setSearch(search)
    const updatedPlants = allPlants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))
      setPlants(updatedPlants)
    
  }
  
  return (
    <div className="app">
      <Header />
      <PlantPage  updatePlants={updatePlants} addPlant={addPlant} plants={plants} />
    </div>
  );
}

export default App;
