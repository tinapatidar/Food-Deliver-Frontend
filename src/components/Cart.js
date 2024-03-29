import React, { useContext, useState } from 'react'
import axios from 'axios'
import { RestaurantContext } from '../contexts/RestaurantContext';
const Cart = () => {
  const [isCheckingOut,setIsCheckingOut] = useState(false)
 const { totalPrice, emptyCart } = useContext(RestaurantContext);
  const generateOrderId = ()=>{
    return Math.floor(Math.random()*1000)
  }

  const handleCheckout =async ()=>{
    try {
      setIsCheckingOut(true);

      const orderId = generateOrderId();

      // Assuming you have a backend endpoint to handle the checkout
      const response = await axios.post(
          "http://localhost:5000/api/previousOrders",
          {
              orderId,
              dateOfOrder: new Date(),
              amount: totalPrice,
          }
      );

      console.log(response.data);
      emptyCart();
  } catch (error) {
      console.error("Error during checkout:", error.message);
  } finally {
      setIsCheckingOut(false);
  }
}

  return (
    <div className="cart-container">
            <h2>Cart</h2>
            <div className="cart-content">
                <span style={{ color: "brown" }}>Total Price: </span> $0
                {totalPrice}
                <button onClick={handleCheckout} disabled={isCheckingOut}>
                    {isCheckingOut ? "Checking out..." : "Checkout"}
                </button>
            </div>
        </div>
  )
}

export default Cart
