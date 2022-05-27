import  express  from 'express';
import { getProducts, getProductByid } from '../controller/product-controller.js';
import {userSignup,userLogin} from "../controller/user-controller.js";




const router =express.Router();

router.post('/signup',userSignup)
router.post('/login',userLogin)

router.get('/products',getProducts)
router.get('/product/:id',getProductByid)

export default  router;