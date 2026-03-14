import jwt from "jsonwebtoken";

export const authadmin=(req,res,next)=>{
    const auth=req.cookies?.admintoken ||req.header('Authorization')?.replace("Bearer ", "")
    console.log("All Cookies:", req.cookies)
console.log("Admin Token:", req.cookies?.admintoken)
    if(!auth){
        return res.status(403)
        .json({
            message:"unauthrized, jwt token is required "
        })

    }
    try {
       const decoded = jwt.verify(auth,process.env.JWT_SECRET) 
       console.log("Decoded:", decoded)
       console.log("JWT_SECRET:", process.env.JWT_SECRET)
       if(decoded.email === process.env.ADMIN_EMAIL){
       return next()
       }
         return res.status(403).json({
            message: "Unauthorized admin",
        });
    } catch (error) {
        return res.status(401)
        .json({
            message:"unauthorized, jwt token is wrong or expired "
        })

    }
}
