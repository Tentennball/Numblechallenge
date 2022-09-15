import { Router } from 'express';
const router = Router();
import isAuth from '../middleware/isAuth.js';
import { signUp, signIn, withdrawal } from '../controller/auth.js';


router.post('/v3/user/reg', signUp);
router.post('/v3/auth/login', signIn);
router.post('/v3/user/unreg', isAuth, withdrawal);
export default router;