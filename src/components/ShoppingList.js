import React, {useState} from "react";
import Item from "./Item";

// Make the 'select' element filter out list of items. 


function ShoppingList({ items }) {
  const [selectedCategory, changeSelectedCategory] = useState("All")

  function selectCategory(e){
    changeSelectedCategory(e.target.value)
  } 

  const itemSelect = items.filter((items) => {
    if (selectedCategory === "All") {
      return items
      } else {
        return items.category === selectedCategory
      }
    } 
  )

  const itemList = itemSelect.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
