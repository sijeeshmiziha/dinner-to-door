import React, { useEffect, useState } from "react";
import FilteredDishes from "../Components/FilteredDishes";
import Hero from "../Components/Hero";
import SpecialDishes from "../Components/SpecialDishes";

function Home() {
  
  let [specialDishes,setSpecialDishes] = useState([]);
  let [filteredDishes,setFilterdDishes] = useState([]);
  let [menu, setMenu] = useState([]);
  //get all the specialDishes
  async function getSpecialDishes() {
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
    let data = await response.json();

    setSpecialDishes(data.meals);
  }
//get filtered dishes
async function getFilteredDishes(){
  let response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  let data = await response.json()
  setFilterdDishes(data.categories)
}
// get all menu
async function getAllMenu() {
  let response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  let data = await response.json();
  setMenu(data.meals);
}

  useEffect(() => {
    getSpecialDishes();
    getFilteredDishes();
    getAllMenu();
  }, []);

  return (
    <div>
      <Hero />
      <SpecialDishes specialDishes={specialDishes}  />
      <FilteredDishes filteredDishes={filteredDishes} data={menu} />
    </div>
  );
}

export default Home;
