import React, { useEffect, useState } from "react";

//ABOVE ARE MY HOOKS
//^V^V^V^V^V^V^V^V^V^V
//BELOW ARE MY IMPORTS

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  //MY STATES
  const [showForm, setShowForm] = useState(false);
  const [toyArr, settoyArr] = useState([])

  //MY FETCH WITH THE USEFFECT

  useEffect(() => {
  fetch("http://localhost:3001/toys")
    .then((resp) => resp.json())
    .then((toyData) => settoyArr(toyData))
  }, [])

  //MY FUNCTIONS

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  //MY RETURN WHERE ALL THE COMPONENTS ARE
  return (
    <>
      <Header />
      {showForm ? <ToyForm settoyArr={settoyArr}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArr={toyArr}/>
    </>
  );
}

export default App;
 