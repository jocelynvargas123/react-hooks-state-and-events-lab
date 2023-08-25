import React, { useState } from "react";

function Item({ name, category }) {
  
  const [addCart, inCart] = useState(true)

  function handleClick(e){
    inCart((addCart) => !addCart)
    if(cart === ""){
    return e.target.className = "remove"}
    else { return e.target.className = "add"}
  }
  let cart = addCart ? "" : "in-cart"
  let cartText = addCart ? "Add to Cart" : "Remove From Cart"


  return (
    <li className= {cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{cartText}</button>
    </li>
  );
}

export default Item;
