import jwt from "jsonwebtoken";

export const authuser=(req,res,next)=>{
    const auth=req.cookies?.token ||req.header('Authorization')?.replace("Bearer ", "")
    if(!auth){
        return res.status(403)
        .json({
            message:"unauthrized, jwt token is required "
        })

    }
    try {
       const decoded = jwt.verify(auth,process.env.JWT_SECRET) 
       req.userId = decoded.id 
       next()
    } catch (error) {
        return res.status(401)
        .json({
            message:"unauthorized, jwt token is wrong or expired "
        })

    }
}