import  express from 'express';
import { checkauth, loginuser, logout, signup } from '../controllers/user.controller.js';
import { authuser } from '../middlewares/authuser.js';

const userrouter =express.Router()
userrouter.post("/signup",signup)
userrouter.post("/login",loginuser)
userrouter.get("/is-auth",authuser,checkauth)
userrouter.post("/logout",authuser,logout)

export default userrouter