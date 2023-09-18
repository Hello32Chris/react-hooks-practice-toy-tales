import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toyArr } ) {

  const toyCard = toyArr.map((toy) => {
    return <ToyCard key={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
    />
  })

  return (
    <div id="toy-collection">
      {toyCard}
    </div>
  );
}

export default ToyContainer;
