import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import {backendUrl} from '../App'
import {toast} from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({token}) => {

  const[orders,setOrders] = useState([]);
  


  const fetchAllOrders= async()=>{
    if(!token){
      return null;
    }

    try{
      const res = await axios.post(backendUrl + '/api/order/list', {}, {headers:{token}})

      if(res.data.success){
        setOrders(res.data.orders);
        
      }else{
        toast.error(res.data.message)
      }
      

    }catch(error){
          toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
    
  }, [token])
  

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order,idx)=>(
            <div key={idx}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                {
                  order.items.map((item,idx)=>{
                    if(idx === order.items.length -1){
                      return <p key={idx}>{item.name} x {item.quantity} <span>{item.size}</span> </p>
                    }

                  })
                }
              </div>

            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Orders