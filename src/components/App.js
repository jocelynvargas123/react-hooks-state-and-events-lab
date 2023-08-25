import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  //using usestate hook create a state variable in the app componet
  let [old, setNew] = useState(false);
  // use variable to determine if our app should be in dark mode or light
  //add event handler to dark mod button and update state when button clicked 
  function handleClick(){
    setNew((a) => !a)
  }
  const appClass = old ? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
