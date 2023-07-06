import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [toggle, toggleSetter] = useState("App light")
  const appClass = toggle ? "App light" : "App dark"

  function toggleTheme(){
    toggleSetter((toggle) => !toggle)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
