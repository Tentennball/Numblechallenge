const path = require('path');
const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');
const isAuth = require('../middleware/isAuth');

router.post('/v3/user/reg', authController.postSignUp);

router.post('/v3/auth/login', authController.postSignIn);

router.post('/v3/user/unreg', isAuth, authController.postWithdrawal);

module.exports = router;