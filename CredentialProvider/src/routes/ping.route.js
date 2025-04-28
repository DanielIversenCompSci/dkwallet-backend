import { Router } from 'express';
import { ping } from '../controllers/ping.controller.js';

const router = Router();

router.get('/ping', ping);   // GET /ping → 200 { msg: 'pong …' }

export default router;
