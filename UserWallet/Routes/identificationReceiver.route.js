import { Router } from 'express';
import { storeIdCard, listIdCards } from '../Controllers/identificationReceiver.controller.js';

const router = Router();

// POST endpoint to receive and store ID cards -> Call this function on POST
router.post('/identificationReceiver/idcard', storeIdCard);

// GET endpoint to retrieve all stored ID cards
router.get('/identificationReceiver/idcard', listIdCards);

export default router;