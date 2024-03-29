import React,{ useContext } from 'react';
import './App.css';
import { RestaurantContext } from './contexts/RestaurantContext';
import RestaurantList from './components/RestaurantList'
import Cart from './components/Cart'
import DishesMenu from './components/DishesMenu'


function App() {
  const selectedRestaurant = useContext(RestaurantContext);
  return (
    <>
    <div className="container">
        <h1 className="header">Food Delivery App</h1>
        <Cart
            style={{ position: "absolute", right: "20px", top: "20px" }}
        />
        <RestaurantList />
        {selectedRestaurant && <DishesMenu />}
    </div>
   </>
  );
}

export default App;
