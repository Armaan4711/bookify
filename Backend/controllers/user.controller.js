import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const signup =async (req,res) => {
    try {
        const {name,email,password}=req.body
        if(!name || !email || !password ) {
            return res 
            .status(400)
            .json({message:"all fields are required ",success :false })
        }
        const existinguser=await User.findOne({email})
        if(existinguser){
            return res
            .status(400)
            .json({message:"user already exists redirecting to login...",success:false})
        }
        const hashedpassword=await bcrypt.hash(password,10)
        const user=await User.create({
            name,
            email,
            password:hashedpassword,
        })
        
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d",})
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge:24 * 60 * 60 * 1000 

        })
        return res
        .status(201)
        .json({message: "user regester sucessfully",
            success:true,
            user:{
                name:user.name,
                email:user.email,
                
            } 
         })
         

    } catch (error) {
        console.error("error during signup:",error)
        return res
        .status(500)
        .json({message:"internal server error ",success:false})
    }
}

export const loginuser=async (req,res) => {
    try {
        const {email,password}=req.body
        if(!email || !password ) {
            return res 
            .status(400)
            .json({mesaage:"all fields are required ",success :false })
        }
        const user=await User.findOne({email}).select("+password")
        if(!user){
            return res
            .status(400)
            .json({message: "user not found ",success: false})
        }
        


        const ismatch=await bcrypt.compare(password,user.password)
        if(!ismatch){
            return res
            .status(400)
            .json({message:"invalid email and password",success:false })
        }
          const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d",})
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
            path: "/" 


        })
        return res
        .status(201)
        .json({message: "user login sucessfully",
            success:true,
            user:{
                name:user.name,
                email:user.email,
                
            }
         })

    } catch (error) {
        console.error("error during login: ",error)
        return res
        .status(500)
        .json({
            message:"internal server error",
            success:false
        })
    }
    
}

export const checkauth = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false,
            });
        }

        return res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        console.error("error during auth:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export const logout =async(req,res)=>{
   try {
    res.clearCookie("token", {
       httpOnly: true,
       secure: false,
       sameSite: "lax",
        path: "/"  // must match if used
     });
     return res
     .status(200)
     .json({ message: "user logged out successfully",success:true,})
   } catch (error) {
    console.error("error during logout",error)
    return res 
    .status(500)
    .json({message:"internal server error ",success: false})
   }
}