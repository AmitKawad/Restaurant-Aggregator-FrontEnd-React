import React, { useState } from 'react'
import './CustomerComponent.css'
import { useLocation,useNavigate } from 'react-router-dom';


function CustomerComponent() {
  const location = useLocation();
  const restaurantsMenu = location.state;
  const navigate = useNavigate();
  const handleOnClickExplore = function(restaurantDetails){
    console.log(restaurantDetails)
    navigate('/allRestaurantMenu',{state:{restaurant:restaurantDetails}})

  }
  
  return (
    <div>
      <section>
        <div className="container">
          <h2>Explore the Restaurants in your area</h2>
          <br></br>
          <div className="cards">
            {restaurantsMenu.map((restaurant, i) => (
              <div key={i} className="card">
                <h4>{restaurant.restaurantName}</h4>
                <button className="btn" onClick={handleOnClickExplore.bind(this,restaurant)}>Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default CustomerComponent