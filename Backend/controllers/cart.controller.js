import User from "../models/user.model.js";

export const updatecart =async (req,res) => {
    try {
        const userId=req.userId
        const {cart}=req.body
        const updatedcart= await User.findByIdAndUpdate(userId,{
            cartitems:cart},{new:true})
        return res
        .status(200)
        .json({success:true,message:"cart updated",updatedcart})
    } catch (error) {
        console.error("error during cart update:",error)
        return res
        .status(500)
        .json({message:"internal server error ",success:false})
    }
}