import React, { useContext } from 'react'


import { Link } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';
import toast from 'react-hot-toast';


function Signup() {
      const{navigate,axios}=useContext(Appcontext)
    const [state, setState] = React.useState("login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
            
            const {data}= await axios.post("/user/signup",formData)
            
            if(data.success){
            toast.success(data.message)
            navigate("/login")

            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
            setTimeout(() => {
      navigate("/login");
    }, 1000);

        }

    }

    return (
        <> 
         <div className='bg-indigo-500/4  h-screen flex justify-center items-center '>
            <form
                onSubmit={handleSubmit}
                className="w-full sm:w-87.5 text-center bg-white/6 border border-indigo-500/60 rounded-2xl px-8">
                <h1 className="text-black-400 text-3xl mt-10 font-medium">
                    Sign Up
                </h1>

                <p className="text-black-400 text-sm mt-2">Please sign in to continue</p>

                
                    <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /> </svg>
                        <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-black placeholder-black/60 border-none outline-none " value={formData.name} onChange={handleChange} required />
                    </div>
                

                <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" /> </svg>
                    <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-black placeholder-black/60 border-none outline-none " value={formData.email} onChange={handleChange} required />
                </div>

                <div className=" flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" /> </svg>
                    <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-black placeholder-black/60 border-none outline-none" value={formData.password} onChange={handleChange} required />
                </div>

                <div className="mt-4 text-left">
                    <button className="text-sm text-indigo-400 hover:underline">
                        Forget password?
                    </button>
                </div>

                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition " >
                    Sign up
                </button>

                <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer" >
                    Already have an account?
                    <Link className="text-indigo-400 hover:underline ml-1" to={"/login"} >click here</Link>
                </p>
            </form>
            {/* Soft Backdrop*/}
            <div className='fixed inset-0 -z-1 pointer-events-none'>
                <div className='absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl' />
                <div className='absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl' />
            </div>
             </div>
        </>
    )

   
  
}

export default Signup