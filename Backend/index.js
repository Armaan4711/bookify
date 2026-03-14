import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { connectdb } from "./config/connectDb.js"
import userrouter from "./routes/user.routes.js"
import adminrouter from "./routes/admin.routes.js"
import bookrouter from "./routes/book.routes.js"
import cartrouter from "./routes/cart.routes.js"
import orderrouter from "./routes/order.routes.js"
import addressrouter from "./routes/address.route.js"
dotenv.config()

const app=express()
const PORT=process.env.PORT || 4000

connectdb()

const allowedOrigins=["http://localhost:5173"]

app.use(cors({origin:allowedOrigins,credentials:true}))
app.use(express.json())
app.use(cookieParser())

//apiendpoints

app.get("/",(req,res)=>{
    res.send("welcome to the backend ")
})
app.use("/images",express.static("uploads"))
app.use("/user",userrouter)
app.use("/admin",adminrouter)
app.use("/cart",cartrouter)
app.use("/book",bookrouter)
app.use("/order",orderrouter)
app.use("/address",addressrouter)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT} `)
})