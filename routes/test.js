import { Router } from 'express';
const router = Router();
import { getIndexPage } from '../controller/test.js';

router.get('/v3/test', getIndexPage);

export default router;