import React from "react";

function ToyCard( { name, image, likes} ) {

  function deleteToy(e) {
    console.log(e)
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        title={`${name} love's Andy!`}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"💕"}</button>
      <button onClick={deleteToy} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
