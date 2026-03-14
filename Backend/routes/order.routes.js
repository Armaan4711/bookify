import express from 'express';
import { authuser } from '../middlewares/authuser.js';

import {
    getallorder,
    getuserorder,
    placeordercod
} from '../controllers/order.controller.js';
import { authadmin } from '../middlewares/authadmin.js';

const orderrouter = express.Router()
orderrouter.post("/cod", authuser, placeordercod)
orderrouter.get("/user", authuser, getuserorder)
orderrouter.get("/admin", authadmin, getallorder)


export default orderrouter