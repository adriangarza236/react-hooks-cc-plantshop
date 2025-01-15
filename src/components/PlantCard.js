import React from "react";
import Button from "./Button"
 
function PlantCard({plants}) {


  return (
    plants.map((plant) =>
    <li className="card" data-testid="plant-item" key={plant.id} >
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <Button />
    </li>
    )
  );
}

export default PlantCard;
