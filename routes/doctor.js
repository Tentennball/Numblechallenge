import path from 'path';
import { Router } from 'express';
const router = Router();
import { getDoctorList, getDoctorInfo, postRegister } from '../controller/doctor.js';
import isAuth from '../middleware/isAuth.js';

router.get('/v3/doctor/list', isAuth, getDoctorList);

router.get('/v3/doctor', isAuth, getDoctorInfo);

router.post('/v3/std/reg', isAuth, postRegister);

export default router;