import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  // useEffect(()=>{
  //   fetchData();

  // },[]);


  // const fetchData = ()=>{
  //   const data = fetch()
  // }




  const handleFilter = () => {
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant.rating > 4
    );
    setRestaurantList(filteredList);
  };

  return (
    <>
      <div className="filter">
        <div className="search-container">
          <input className="searchInput" type="text" />
          <button className="filter-btn" onClick={handleFilter}>
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="body">
        <div className="res-container">
          {restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
