import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, useSelectedCategory] = useState(items)

 function HandleChange(e){
  const newList = items.filter((food) => food.category === e.target.value)
  return useSelectedCategory(newList)
 }
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={HandleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
