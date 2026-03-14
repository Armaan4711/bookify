import express from 'express';

import { authadmin } from '../middlewares/authadmin.js';
import { addbook, getbooks } from '../controllers/book.controller.js';
import { upload } from './../config/multer.js';

const bookrouter=express.Router()


bookrouter.post("/add",authadmin,upload.single("image"),addbook)
bookrouter.get("/get-book",getbooks)

export default bookrouter