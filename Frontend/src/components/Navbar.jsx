import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets';
import { Appcontext } from '../context/Appcontext';
import toast from 'react-hot-toast';



function Navbar() {
    const {navigate,user,setuser,cartcount,axios}=useContext(Appcontext)
    const [open, setOpen] = React.useState(false)
    

    const logout = async () => {
    try {
        await axios.post("/user/logout"); // 🔥 IMPORTANT

        setuser(null); // not false
         localStorage.removeItem("user"); 
        toast.success("user logout successfully")
        navigate("/")

    } catch (error) {
        console.log(error);
        toast.error("logout failed")
     
    }
}
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

           <Link to={"/"}>
           <img src={assets.logo} alt="" />
           </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
               <Link to={"/"}>Home</Link>
               <Link to={"/books"}>Books</Link>
                <div className="relative cursor-pointer">
                    <svg 
                    onClick={()=>navigate("/Cart")}
                    width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#ff6347" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button 
                    onClick={()=>navigate("/Cart")}
                    className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{cartcount}</button>
                </div>
                    {user ? 
                    <div className='flex items-center gap-5'>
                    <button onClick={()=>{navigate("/my-orders");
                        window.scrollTo({top:0,behavior:"smooth"}) 
                    }}
                         className='px-6 py-1 bg-primary text-white rounded-full cursor-pointer'>My Oders</button>
                    <p onClick={logout} className='cursor-pointer hover:underline'>Logout </p>
                        </div>:
                        <button onClick={()=>navigate("/login")} className="cursor-pointer px-8 py-2 bg-primary hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button>
                    }
               
            </div>
            
            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="cursor-pointer
            sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <div className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#ff6347" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{cartcount}</button>
                </div>
                 <Link to={"/"}>Home</Link>
               <Link to={"/books"}>Books</Link>
               
                {user ? 
                    <div className='flex items-center gap-5'>
                    <button onClick={()=>{navigate("/my-orders");
                        window.scrollTo({top:0,behavior:"smooth"}) 
                    }}
                         className='px-6 py-1 bg-primary text-white rounded-full cursor-pointer'>My Oders</button>
                    <p onClick={logout} className='cursor-pointer hover:underline'>Logout </p>
                        </div>:
                        <button onClick={()=>navigate("/login")} className="cursor-pointer px-8 py-2 bg-primary hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button>
                    }
            </div>

        </nav>
    )
}
export default Navbar