import React, { useState } from "react";

// When the user clicks the button element, the item should be added to the virtual cart. 
// Change class name to "in-cart" 


function Item({ name, category }) {
  const [cart, cartSet] = useState("in-cart")
  const cartStatus = cart ? "" : "in-cart"

  function addCart(){
    cartSet((cart) => !cart)
  }


  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
