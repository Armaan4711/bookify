import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Appcontext } from '../context/Appcontext';


function Bookcard({book}) {
    const {addtocart}=useContext(Appcontext)
   
  return (
    <div className='p-4 border rounded-2xl bg-gradient-to-t from-purple-300/60'>
        <Link className='flex items-center justify-center' to={`/book/${book._id}`}>
        <img src={`http://localhost:5000/images/${book.image}`} alt="" className=' w-[255px]  h-[350px] transition-all duration-300 hover:scale-105'/>
        </Link>
        <div className='flex items-center justify-between my-1'>
            <div className='flex items-center gap-2 my-1'>
               <img src={assets.star_icon} alt="" /> 
               <p>{book.rating}</p>
            </div>
            <div className='flex items-center gap-1 my-1 '>
                <p>{book.reviews}</p>
                <p className='font-semibold p-2 m-2'>Reviews</p>
            </div>
        </div>
        <p>Author:{book.author}</p>
        <p className='text-lg font-bold'>{book.title}</p>
        <div className='flex items-center gap-5'>
            <p className='text-gray-400 line-through'>${book.price}</p>
            <p className='text-gray-800 '>${book.offerprice}</p>
        </div>
        <div className='flex items-center justify-center'>
        <button
        onClick={()=>addtocart(book)}
        className='bg-primary text-white rounded-full px-10 py-2 cursor-pointer mt-4 '>Add To Cart</button>
        </div>
    </div>
  )
}

export default Bookcard