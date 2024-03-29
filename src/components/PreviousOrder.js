import axios from 'axios';
import React, { useEffect ,useState} from 'react'

const PreviousOrder = ({handleShow}) => {
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
   const fetchOrders = async()=>{
    try{
      const response = await axios.get("http://localhost:5000/api/previousOrders");
      setOrders(response.data)

    }catch(err){
      console.log(err)
    }
   }
   fetchOrders();

  },[])
  return (
<div className="previous-orders-container">
            <h2>Your Previous Orders</h2>
            <button style={{ backgroundColor: "white", color: "red" }} onClick={handleShow}>Close</button>
            <ul className="orders-list">
                {orders.map(order => (
                    <li key={order.orderId} className="order-card">
                        <h3>Order #{order.orderId}</h3>
                        <div className="order-details">
                            <div>Items: 1</div>
                            <div>Total Amount: ${order.amount.toFixed(2)}</div>
                        </div>
                        <div>Ordered on: {new Date(order.dateOfOrder).toLocaleDateString()}</div>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default PreviousOrder
