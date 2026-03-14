import React, { useContext, useState } from 'react'
import { Appcontext } from '../context/Appcontext'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

const AddAddress = () => {
 const {navigate,axios,user}=useContext(Appcontext)
  const [address, setaddress] = useState({
        fullname: "",
        phonenumber: "",
        email: "",
        city: "",
        state: "",
        postalcode: "",
        country: ""
      })
 const handlechange =(e)=>{
  setaddress({
    ...address,[e.target.name]:e.target.value,
  })
   

 }
  const handlesubmit=async(e)=>{
    e.preventDefault()
     try {
      const {data}=await axios.post("/address/add",{address})
      if (data.success){
        toast.success(data.message)
        navigate("/cart")
      }
     } catch (error) {
      toast.error(error.message)
     }
  

  }
  useEffect(()=>{
    if(!user){
      navigate("/cart")
    }
  },[])
  return (
    <>
      <style>
        {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}
      </style>

      <section className="flex items-center justify-center py-12 px-4">
        <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">

          <div className="p-5">
            <h1 className="text-3xl font-semibold text-gray-900 text-center md:text-start mb-3 tracking-tight">
              Add Addresss
            </h1>
            <p className="text-sm/6 text-gray-600 text-center md:text-start mx-auto md:mx-0 mb-8 leading-relaxed max-w-[400px]">
              Have a question or idea? Our approachable team would love to connect and support you.
            </p>

            <form onSubmit={handlesubmit}>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-2">First name</label>
                  <input 
                  required
                  value={address.fullname}
                  onChange={handlechange}
                  name='fullname'
                  type="text" 
                  placeholder="Fullname" 
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                </div>
                  <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">Email id</label>
                <input 
                 required
                type="email" placeholder="david@company.com"
                value={address.email}
                name='email'
                onChange={handlechange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
              </div>
              </div>

            

               <div className="grid grid-cols-3 gap-4 mb-5">
                <div>
                <label className="block text-sm text-gray-500 mb-2">Phone number</label>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-indigo-500 transition-colors">
                  <select className="px-3 py-3 text-sm outline-none cursor-pointer text-gray-500 bg-white border-r border-gray-300">
                    <option>IN</option>
                    <option>UK</option>
                    <option >US</option>
                    <option>CA</option>
                  </select>
                  <input 
                   required
                  type="tel"
                  name='phonenumber'
                   placeholder="+91" 
                   value={address.phonenumber}
                   onChange={handlechange}
                   className="flex-1 px-3 py-3 text-sm outline-none" />
                </div>
              </div>
                <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">City</label>
                <input 
                 required
                type="text" 
                value={address.city}
                name='city'
                onChange={handlechange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
              </div>
              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">State</label>
                <input 
                 required
                type="text" 
                value={address.state}
                name='state'
                onChange={handlechange}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
              </div>
              </div>

               <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm text-gray-500 mb-2">Postal Code</label>
                  <input
                   required 
                  value={address.postalcode}
                  onChange={handlechange}
                  name='postalcode'
                  type="text" 
                  
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                </div>
                  <div>
                  <label className="block text-sm text-gray-500 mb-2">Country</label>
                  <input
                  required
                  value={address.country}
                  onChange={handlechange}
                  name='country'
                  type="text" 
                  
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                </div>
              </div>

            

              <button 
                type='submit'
               className="w-full py-3.5 bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-lg text-sm cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]" >
                Set Address
              </button>
            </form>
          </div>

          <div className="rounded-3xl p-10 relative min-h-[662px] w-full max-w-[520px] hidden md:flex flex-col justify-between overflow-hidden">
            <img src={"https://assets.prebuiltui.com/images/components/form/form-rightside-image.png"} alt="3D shapes" className="absolute inset-0 w-full h-full object-cover" />

            <div className="relative z-10 mt-auto">
              <p className="text-sm/6 text-white mb-5 max-w-[400px]">
                Stop spending hours recreating layouts - with <strong>PrebuiltUI</strong> you can copy, customize and launch stunning UIs in minutes.
              </p>
              <p className="text-sm text-white mb-4 text-right">
                ━ Emily Rodriguez
              </p>

              <div className="flex justify-end gap-2 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddAddress