import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Appcontext } from '../../context/Appcontext';
import { useEffect } from 'react';

const Myorders = () => {
    const boxIcon = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg"
const {axios,navigate,isadmin}=useContext(Appcontext)
   const [orders,setorders]=useState([])
   const getallorder= async () => {
    try {
        const {data}=await axios.get("/order/admin")
        console.log("ORDER API RESPONSE:", data)  
        if(data.success){
            setorders(data.orders)
        }
    } catch (error) {
        toast.error(error.message)
            console.log("ORDER ERROR:", error.response) 
    }
   }
   useEffect(()=>{
    if(isadmin){
        getallorder()
    }
   },[isadmin])
    return (
        <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium">Orders List</h2>
           {orders.map((order,index)=>(
            <div
            key={index}
            className='flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr]
            md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-200 *:
            text-gray-800  '>
                
                <p className='flex justify-between items-center gap-6 '>
                   <span>orderId : {order._id}</span>
                   <span>Total Amount</span>
                </p>
                <p className=' font-medium text-base my-auto text-black/70'>${order.amount}</p>
            <div
            className='flex flex-col text-sm'><p>
                date: {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p>Payment Method</p>
            <p>Status: {order.status}</p>
            
            </div>

            </div>
           ))}
        </div>
    );
};

export default Myorders