import { Router } from 'express';
import { requestIdCard } from '../controllers/idcard.controller.js';

const router = Router();

// POST endpoint for requesting a digital ID card
router.post('/idcard/request', requestIdCard);

export default router;