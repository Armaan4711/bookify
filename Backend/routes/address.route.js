import  express from 'express';
import { authuser } from '../middlewares/authuser.js';
import { addadress, getadress } from './../controllers/address.controller.js';



const addressrouter =express.Router()
addressrouter.post("/add",authuser,addadress)
addressrouter.get("/get",authuser,getadress)


export default addressrouter