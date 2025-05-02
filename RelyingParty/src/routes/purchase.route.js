import {Router} from 'express';
import {requestPurchase} from '../controllers/purchase.controller.js';

const router = Router()

router.post('/', requestPurchase);

export default router;