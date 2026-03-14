import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {books} from "../assets/assets"
import toast from "react-hot-toast";
import axios from 'axios';
axios.defaults.baseURL= import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials= true

export const Appcontext=createContext(null)

const AppContextProvider=({children})=>{
    const navigate=useNavigate()
    const [address, setaddress] = useState([])
    const [user, setuser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
});
    const [isadmin,setisadmin]=useState(false)
    const [searchquery,setsearchquery]=useState("")
    const [selectedcategory,setselectedcategory]=useState("")
    const [booksdata,setbooksdata]=useState([])
    const [cart,setcart]=useState([])
    const [authReady, setAuthReady] = useState(false);
    const fetchadmin = async () => {
    try {
        const { data } = await axios.get("/admin/is-auth", {
            withCredentials: true
        });

        if (data.success) {
            setisadmin(true);
        } else {
            setisadmin(false);
        }

    } catch (error) {
        if (
            error.response?.status !== 401 &&
            error.response?.status !== 403
        ) {
            toast.error(error.message);
        }
        setisadmin(false);
    }
};
  const fetchuser = async () => {
    try {
        const { data } = await axios.get("/user/is-auth", {
            withCredentials: true
        });

        if (data.success) {
            setuser(data.user);
            localStorage.setItem("user", JSON.stringify(data.user));
        } else {
            setuser(null);
            localStorage.removeItem("user");
        }

    } catch (error) {
        setuser(null);
        localStorage.removeItem("user");
    }
};
    const fetchbooks=async()=>{
       try {
            const{data}=await axios.get("/book/get-book")
            if(data.success){
                setbooksdata(data.books)
            }
       } catch (error) {
        toast.error(error.message)
       }
    }

    const addtocart =(book)=>{
        const existingbook=cart.find((item)=>item._id === book._id)
        if(existingbook){
            const updatedcart=cart.map((item)=>item._id === book._id ? {...item,quantity:item.quantity +1 }:item)
        setcart(updatedcart)
        toast.success("added to cart")
        }else{
            setcart([...cart,{...book,quantity:1}])
            toast.success("added to cart")
        }
    }
    const removefromcart= (bookId)=>{
        const updatedcart=cart.map((item)=>item._id === bookId ? {...item,quantity:item.quantity -1 }: item)
    .filter((item)=> item.quantity >0)
    setcart(updatedcart)
    toast.success("remove from cart")

}
const updatecart=(productId,newqty)=>{
    setcart((prevcart)=>prevcart.map((item)=>item._id === productId ? {...item,quantity:newqty}:item 
)
)
toast.success("quantity updated")
}
const cartcount=cart?.reduce((total,item)=>total + item.quantity,0)
const totalcartprice =cart?.reduce((total,item)=> total + item.quantity * item.offerprice,0)
    useEffect(() => {
    const init = async () => {
        try {
            await Promise.all([
                fetchuser(),
                fetchadmin(),
                fetchbooks()
            ]);
        } catch (error) {
            console.log(error);
        } finally {
            setAuthReady(true); // 🔥 MOST IMPORTANT LINE
        }
    };

    init();
}, []);
if (!authReady) {
    return (
        <div style={{ visibility: "hidden" }}>
            Loading...
        </div>
    );
}
    return <Appcontext.Provider value={ {authReady, setAuthReady,address,axios,setcart, setaddress,isadmin,setisadmin,cart,totalcartprice,updatecart,cartcount,removefromcart,addtocart,booksdata,navigate,user,setuser,selectedcategory,setselectedcategory,setbooksdata,searchquery,setsearchquery} }>
        {children}
    </Appcontext.Provider>
}
export default AppContextProvider