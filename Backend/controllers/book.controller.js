import Book from "../models/book.model.js";


export const addbook=async (req,res) => {
    try {
       const {
       
            title,
            author,
            price,
            offerprice,
            rating,
            reviews,
            description,
            category,
       }=req.body 
       console.log(req.body)
       console.log(req.file)
       if(!title || 
        !author||
        !price||
        !offerprice||
        !rating||
        !reviews||
        !description||
        !category){
            return res
            .status(400)
            .json({message:"all fields are required",success:false})
        }
        if (!req.file) {
             return res.status(400).json({
                message: "Image is required",
                success: false
         })
         }
         

const image = req.file.filename
        const book=await Book.create({
           title,
            author,
            price,
            offerprice,
            rating,
            reviews,
            description,
            category,
            image 
        })
        return res
        .status(200)
        .json({
            success:true,
            book,
            message:"Book added successfully"
        })

} catch (error) {
         console.error("error during addbook: ", error)
        return res
        .status(500)
        .json({message:"internal server error ",success: false})
    }
}
export const getbooks=async (req,res) => {
    try {
        const books=await Book.find()
        return res
        .status(200)
        .json({
            success:true,
            books
        })
    } catch (error) {
         console.error("error during addbook: ", error)
        return res
        .status(500)
        .json({message:"internal server error ",success: false}) 
    }
    
}
