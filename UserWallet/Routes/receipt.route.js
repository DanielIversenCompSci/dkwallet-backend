import { Router } from 'express';
import { receiveReceipt } from '../Controllers/receipt.controller.js';
const router = Router();
router.post('/rx-receipt', receiveReceipt);   // POST /rx-receipt
export default router;
