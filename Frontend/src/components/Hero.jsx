import React, { useContext } from 'react'
import { assets } from './../assets/assets';
import { Appcontext } from './../context/Appcontext';

function Hero() {
    const{navigate}=useContext(Appcontext)
    return (
        <div className='flex p-5 flex-col lg:flex-row items-center justify-between gap-4 bg-gradient-to-b from-cyan-100/90'>
            <div className='relative '>
                <img src={assets.hero_girl} alt="girl img" />
                <div className='hidden lg:block absolute top-20 -right-40'><img src={assets.hero_book} alt="" /></div>

            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl md:text-5xl font-bold text-gray-800 '>
                    Discover your Next<br/>
                    <span className='text-primary'>Favorite Books</span>
                </h1>
                <div className='my-10 flex  flex-col lg:flex-row gap-5 md:gap-10'>
                    <button 
                    onClick={()=>{navigate("/books")
                 window.scrollTo({top:0,behavior:'smooth'})}
                    }
                     className='bg-primary text-white rounded-full px-10 py-3 cursor-pointer '>Shop Now</button>
                    <button 
                     onClick={()=>{navigate("/books")
                 window.scrollTo({top:0,behavior:'smooth'})}
                    }
                    className='bg-white text-primary rounded-full px-10 py-3 border cursor-pointer '>Explore </button>
                </div>
            </div>
        </div>
    )
}

export default Hero