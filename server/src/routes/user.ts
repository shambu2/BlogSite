import epxress from "express";
import { postSignin, postSignup } from "../controller/controller";
const router = epxress.Router();

router.post('/signup',postSignup);
router.post('/signin',postSignin);



export default router;