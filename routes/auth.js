import { Router } from 'express';
const router = Router();
import isAuth from '../middleware/isAuth.js';
import { postSignUp, postSignIn, postWithdrawal } from '../controller/auth.js';


router.post('/v3/user/reg', postSignUp);
router.post('/v3/auth/login', postSignIn);
router.post('/v3/user/unreg', isAuth, postWithdrawal);
export default router;