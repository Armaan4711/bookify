import mongoose from 'mongoose';


export const connectdb=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    } catch (error) {
        console.error("database connection failed: ", error.message)
        process.exit(1)
    }
}
