import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Menu.css'
import NavBarComponent from './NavBarComponent';


function MenuComponent() {
  const [addedToCart, setAddedToCart] = useState('');
  const [dishesAdded, setDishesAdded] = useState([]);
  const location = useLocation();
  const restaurantsDetails = location.state;
  
  console.log('restaurantsDetails', restaurantsDetails)
  const addedToCartHandler = function (dish) {
    setDishesAdded((previousState) => {
      return [...previousState, dish]
    })
    setAddedToCart(true)

  }
  return (
    <div>
      <NavBarComponent/>
      <body id='MenuClassBody'>
      <section>
        <div className="container">
          <h1 className='MenuTitle'>Explore our Menu </h1>
          <br></br>
          <div className="cards">
            {restaurantsDetails.restaurant.food.map((food, i) => (
              <div>
                <h4 key={i}>{'Range of '+ food.foodType}</h4>
                <br></br>
                <div className="cards">
                  {food.dishes.map((dish, i) => {
                    return <div key={i} className="card">
                      <h4 key={i}>{dish}</h4>
                      {!dishesAdded.includes(dish) && <button className="btn" onClick={addedToCartHandler.bind(this, dish)}>Add to cart</button>}
                      {addedToCart && dishesAdded.includes(dish) && <input type="number" defaultValue="0" />}
                    </div>
                  })}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      </body>
    </div>
  )
}

export default MenuComponent