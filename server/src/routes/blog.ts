import express from "express";
import { getBlogBulk, getBlogId, postBlog, putBlog, verifyToken } from "../controller/controller";
const router = express.Router();

router.get('/blogs',verifyToken,getBlogBulk);
router.get('/blog/:id',getBlogId);
router.post('/blog',postBlog);
router.put('/blog',putBlog);

export default router;