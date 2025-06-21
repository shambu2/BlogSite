import express from "express";
const router = express.Router();
import userRoutes from "./user";
import blogRoutes from "./blog"

router.use('/user',userRoutes)
router.use('/book',blogRoutes)

export default router;