import path from 'path';

import { Router } from 'express';

const router = Router();

import { getUsers } from '../controller/test.js';

router.get('/v3/test', getUsers);


export default router;