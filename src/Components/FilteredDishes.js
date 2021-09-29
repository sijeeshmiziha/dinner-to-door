import React, { useState } from "react";
import AddToCart from "./AddToCart";
import "./FilteredDishes.css";
import Popup from "./Popup";
function FilteredDishes({ filteredDishes, data }) {
 let [filterDishes, setFilterDishes] = useState([]); //for showing the selected dish details
  let [active, setActive] = useState(); //for setting active state for strMeals
  
  let [popUp,setPopUp]=useState(false)//for setting true or false to show and hide the Popup component
  let [item,setItem]=useState([])//for passing selected item to popup
  function showPopUp(itm){
    setPopUp(true)
    setItem(itm)//setting item from the map ,recieving item parameter by callback function showPopup
  }
  
  //show filteredDishes for showing strCategories
  let dishes = filteredDishes.map((item) => {
    return (
      <li
        className={item.strCategory === active ? "active" : ""}
        onClick={() => {
          filterfunc(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });
  // at the time of onclick on the li lets show the strMeal details
  function filterfunc(category) {
    setActive(category);
    let display = data
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((itm) => {
        return (
          <li onClick={()=>showPopUp(itm)} >
            <img src={itm.strMealThumb} alt="" />
            <h4>{itm.strMeal}</h4>
          </li>
        );
      });
    setFilterDishes(display);//because display is block scope so setting this to filterDishes state
  }

    //add to cart oderitem click function
    let [cart,setCart]=useState(false)
    let [oders,setOders]=useState([])//for saving the oder that recieves from the parameter and send to AddToCart
    function oderItems(oder){
      setCart(true)
      setOders([...oders,{oder}])
    }

  return (
    <div>
      {popUp && <Popup setPopUp={setPopUp} item={item} oderItems={oderItems} />}
      {cart && <AddToCart oder={oders}/>}
      <div className="filter-dishes">
        <h3 className="text-center">Choose your dishes </h3>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
          nostrum.
        </p>
        <ul>{dishes}</ul>
      </div>
      <div className="filtered-dishes">
        <ul>{filterDishes}</ul>
      </div>
  
    </div>
  );
}

export default FilteredDishes;
