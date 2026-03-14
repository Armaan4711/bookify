import { useContext, useState } from "react";
import { Appcontext } from "../../context/Appcontext";
import { assets, categories } from "../../assets/assets";
import toast from "react-hot-toast";


const Addproduct = () => {
  const{setbooksdata,navigate,axios}=useContext(Appcontext)
  const [file,setfile]=useState(null)
  const [bookdata,setbookdata]=useState({
    
     title: "",
    author: "",
    price: "",
    offerprice: "",
    rating: "",
    reviews: "",
    description: "",
    image: null,
    category: "",  
  })
   const handlechange =(e)=>{
  setbookdata({
    ...bookdata,[e.target.name]:e.target.value,
  })
   

 }
  const handlesubmit=async(e)=>{
    e.preventDefault()
      try {
        const formdata= new FormData()
        formdata.append("image",file )
        formdata.append("title",bookdata.title )
        formdata.append("author",bookdata.author )
        formdata.append("price",bookdata.price)
        formdata.append("offerprice",bookdata.offerprice )
        formdata.append("rating",bookdata.rating )
        formdata.append("reviews",bookdata.reviews )
        formdata.append("description",bookdata.description )
        formdata.append("category",bookdata.category )
       
        const {data}=await axios.post("/book/add",formdata)
        if(data.success){
            toast.success(data.message)
            navigate("/admin")
        }else{
            toast.error(data.message)
        }

      } catch (error) {
        toast.error(error.message)
      }
 
  
  }

    return (
        <div className="py-10 flex flex-col justify-between bg-white">
            <form onSubmit={handlesubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
                <div>
                    <p className="text-base font-medium">Book Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        <label htmlFor="image">
                            <input 
                            type="file"
                            accept="image/*"
                            onChange={(e)=>{
                                setfile(e.target.files[0])
                            }}
                            id="image"
                            hidden

                            />
                            <img 
                            className="max-w-24 cursor-pointer"
                            width={100}
                            height={100}
                            src={file ? URL.createObjectURL(file) : assets.upload_area} alt="" />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Book Name</label>
                    <input 
                    value={bookdata.title}
                    onChange={handlechange}
                    name="title"
                    id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Book Author</label>
                    <input 
                    value={bookdata.author}
                    onChange={handlechange}
                    name="author"
                    id="product-author" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Book Description</label>
                    <textarea 
                    value={bookdata.description}
                    onChange={handlechange}
                    name="description"
                    id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select 
                    value={bookdata.category}
                    onChange={handlechange}
                    name="category"
                    id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                        <option value="">Select Category</option>
                        {categories.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">book Price</label>
                        <input
                        value={bookdata.price}
                    onChange={handlechange}
                    name="price"
                         id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input
                         value={bookdata.offerprice}
                    onChange={handlechange}
                    name="offerprice"
                        id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="Rating">Rating</label>
                        <input
                         value={bookdata.rating}
                    onChange={handlechange}
                    name="rating"
                        id="rating" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                                    <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="reviews">Review</label>
                    <input 
                    value={bookdata.reviews}
                    onChange={handlechange}
                    name="reviews"
                    id="reviews" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                </div>
                <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">ADD</button>
            </form>
        </div>
    );
};

export default Addproduct