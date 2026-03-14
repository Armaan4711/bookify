import React, { useContext, useState } from 'react'
import { categories } from '../assets/assets'
import { Appcontext } from '../context/Appcontext'

function Search() {
    const {setsearchquery,navigate}=useContext(Appcontext)
    const [input,setinput]=useState("")
    const handlesearch=(e)=>{
        e.preventDefault()
        setsearchquery(input)
        navigate("/books")
    }
  return (
    <div className='my-16 gap-5 rounded-2xl border border-gray-400 bg-white h-[400px] flex flex-col items-center justify-center bg-gradient-to-b from-purple-200/80'>
        <form onSubmit={handlesearch} className='max-w-4xl w-full mx-auto flex justify-center '>
            <input 
            value={input}
            onChange={(e)=>setinput(e.target.value)}
            type="text" placeholder='Search Books..' className='w-1/2 outline-none border border-gray-400 py-4 text-center'/>
            <button className='py-4 px-12 bg-primary text-white rounded-r-full cursor-pointer'>Search</button>
        </form>
        <div className='flex flex-wrap gap-6 mt-8'>
            {
                categories.map((category)=>(
                    <div tabIndex={category._id}
                    className='w-[116px] mx-auto flex items-center justify-center bg-gray-100 border border-black-300 rounded-md cursor-pointer
                    transition duration-500 hover:scale-125'
                    >

                      <img src={category.image} alt="" />  
                    </div>
                ))


                
            }
        </div>
    </div>
  )
}

export default Search