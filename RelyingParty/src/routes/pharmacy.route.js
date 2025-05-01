import { Router } from 'express';
import { requestMedicine } from '../controllers/pharmacy.controller.js';

const router = Router();
router.post('/rx-request', requestMedicine);   // POST /rx-request
export default router;