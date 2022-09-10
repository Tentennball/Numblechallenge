const path = require('path');

const express = require('express');

const router = express.Router();

const testController = require('../controller/test');

router.get('/v3/test', testController.getUsers);


module.exports = router;