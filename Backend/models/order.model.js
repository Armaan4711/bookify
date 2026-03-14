import mongoose from "mongoose";


const orderschema = new mongoose.Schema({
    userId:{
        type: String,
        required:true,
        ref:"User"
    },
    items:[{
        product:{        
        type: String,
        required:true,
        ref:"Book"},
        quantity:{
         type: Number,
        required:true,
        }
    }],
     address:{        
        type: String,
        required:true,
        ref:"Address"},
        amount:{
         type: Number,
        required:true,
        },
        status:{type:String,
            default:"Order placed"
        },
        paymenttype:{
            type:String,
            required:true
        },
        ispaid:{
            type:Boolean,
            required:true,
            default:false
        }


},
    { timestamps: true }
)
const Order = mongoose.model("Order", orderschema)
export default Order