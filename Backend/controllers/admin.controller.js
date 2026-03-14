import jwt from "jsonwebtoken"



export const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      })
    }

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false
      })
    }

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.cookie("admintoken", token, {
      httpOnly: true,
      secure: false, // true in production (https)
      
      maxAge: 24 * 60 * 60 * 1000,
    })

    return res.status(200).json({
      message: "Login successful",
      success: true,
      token
    })

  } catch (error) {
    console.error("error during admin login:", error)
    return res.status(500).json({
      message: "internal server error",
      success: false
    })
  }
}


export const adminlogout =async(req,res)=>{
   try {
     res.clearCookie("admintoken")
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
export const checkauth =async (req,res) => {
    try {
       res.status(200).json({success:true,admin: true,})
    } catch (error) {
        console.error("error during auth: ", error)
        return res
        .status(500)
        .json({message:"internal server error ",success: false})
    }
    
}