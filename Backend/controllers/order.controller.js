import Book from "../models/book.model.js"
import Order from "../models/order.model.js";

export const placeordercod=async (req,res) => {
   try {
    const userId=req.userId

    const {items,address}=req.body
    console.log("BODY:", req.body)

    if(! address || !items || items.length === 0){
        return res
        .status(400)
        .json({message:"invalid order details",success:false})
    }
    let amount = 0
    for(const item of items){
        const book =await Book.findById(item.product)
        if(!book){
            return res
            .status(404)
        .json({message:"Book not found",success:false})

        }
        amount += book.offerprice *item.quantity
    }
    await Order.create({
        userId,
        items,
        address,
        amount,
        paymenttype:"COD",
        ispaid:false,
    })
    res
    .status(200)
        .json({message:" order placed successfully",success:true})
   } catch (error) {
    console.error("error during  order:",error)
        return res
        .status(500)
        .json({message:"internal server error ",success:false})
   } 
}

export const getuserorder=async (req,res) => {
    try {
        const userId=req.userId
        const orders=await Order.find({
            userId,
            $or:[{paymenttype:"COD"}],

        }).sort({createdAt:-1})
        res.status(200)
        .json({success:true,
            orders
        })
    } catch (error) {
        console.error("error during  getorder:",error)
        return res
        .status(500)
        .json({message:"internal server error ",success:false})
    }
}
export const getallorder=async (req,res) => {
    try {
        const orders=await Order.find({
            $or:[{paymenttype:"COD"}],
        }).sort({createdAt:-1})
        res.status(200)
        .json({success:true,
            orders
        })
    } catch (error) {
        console.error("error during  get all order:",error)
        return res
        .status(500)
        .json({message:"internal server error ",success:false})
    }
}