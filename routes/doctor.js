import { Router } from 'express';
const router = Router();
import isAuth from '../middleware/isAuth.js';
import { getDoctorList, getDoctorInfo, postRegister } from '../controller/doctor.js';

router.get('/v3/doctor/list', isAuth, getDoctorList);
router.get('/v3/doctor', isAuth, getDoctorInfo);
router.post('/v3/std/reg', isAuth, postRegister);
export default router;