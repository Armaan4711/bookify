import mongoose from "mongoose";

const addressschema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    fullname: {
        type:String,
        required:true
    },
    phonenumber: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    state: {
        type:String,
        required:true
    },
    postalcode: {
        type:String,
        required:true
    },
    country: {
        type:String,
        required:true
    }
},
    { timestamps: true }
)
const Address = mongoose.model("Address", addressschema)
export default Address