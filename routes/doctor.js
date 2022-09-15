import { Router } from 'express';
const router = Router();
import isAuth from '../middleware/isAuth.js';
import { doctorList, doctorInfo, register } from '../controller/doctor.js';

router.get('/v3/doctor/list', isAuth, doctorList);
router.get('/v3/doctor', isAuth, doctorInfo);
router.post('/v3/std/reg', isAuth, register);
export default router;