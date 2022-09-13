const path = require('path');
const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctor');
const isAuth = require('../middleware/isAuth');

router.get('/v3/doctor/list', isAuth, doctorController.getDoctorList);

router.get('/v3/doctor', isAuth, doctorController.getDoctorInfo);

router.post('/v3/std/reg', isAuth, doctorController.postRegister);

module.exports = router;