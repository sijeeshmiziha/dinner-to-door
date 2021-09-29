import React, { useState } from "react";
import AddToCart from "./AddToCart";
import Popup from "./Popup";
import "./SpecialDishes.css";
function SpecialDishes({ specialDishes  }) {
  let [popUp, setPopUp] = useState(false);//for setting true or false to show and hide the Popup component
  let [items, setItems] = useState();//for passing selected item to popup
  
  function showPopup(item) {
    setPopUp(true);
    setItems(item);//setting item from the map ,recieving item parameter by callback function showPopup
  }
 
  //for showing special dishes lets map and store to a variable specialDishes
  let displayDishes = specialDishes.map((item) => {
    return (
      <li
        onClick={() => {
          showPopup(item);
        }}
      >
        <img src={item.strMealThumb} alt="" />
        <h3>{item.strMeal}</h3>
      </li>
    );
  });

  //add to cart oderitem click function
  let [cart,setCart]= useState(false);
  let [oders,setOders]=useState([])//for saving the oder that recieves from the parameter and send to AddToCart
  function oderItems(oder){
    setCart(true)
    setOders([...oders,{oder}])
  }
  return (
    <div className="special-dishes text-family">
      {popUp && <Popup setPopUp={setPopUp} item={items} oderItems={oderItems}  />}
      {cart && <AddToCart oder={oders} /> }
      <div className="sd-container text-center">
        <h2>Our Special Dishes</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          labore!s
        </p>
      </div>
      <div className="special-menu">
        <ul>{displayDishes}</ul>
      </div>
    </div>
  );
}

export default SpecialDishes;
