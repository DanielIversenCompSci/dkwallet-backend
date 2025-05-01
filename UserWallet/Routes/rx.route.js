import { Router } from 'express';
import { provideProof } from '../Controllers/rx.controller.js';

const router = Router();
router.post('/rx-proof', provideProof);   // POST /rx-proof
export default router;
