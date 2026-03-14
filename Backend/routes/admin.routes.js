import express from 'express';
import { adminlogin, adminlogout, checkauth } from '../controllers/admin.controller.js';
import { authadmin } from './../middlewares/authadmin.js';


const adminrouter=express.Router()

adminrouter.post("/login",adminlogin)
adminrouter.get("/is-auth",authadmin,checkauth)
adminrouter.get("/logout",adminlogout)

export default adminrouter