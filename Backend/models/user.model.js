import mongoose from "mongoose";

const userschema =new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cartitems:{
       type:Object,
        default:{},
    }
},
{minimize:false}
)
 const User= mongoose.model("User",userschema)
 export default User