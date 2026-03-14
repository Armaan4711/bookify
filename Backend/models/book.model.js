import mongoose from "mongoose";

const bookschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     author:{
        type:String,
        required:true
    },
     price:{
        type:Number,
        required:true
    },
    offerprice:{
        type:Number,
        required:true
    },
     rating:{
        type:Number,
        required:true
    },
     reviews:{
        type:Number,
        required:true,
        default:0

    },
     description:{
        type:String,
        required:true
    },
     category:{
        type:String,
        required:true
    },
     image:{
        type:String,
        required:true
    },

},
{timestamps:true}
)
 const Book= mongoose.model("Book",bookschema)
 export default Book