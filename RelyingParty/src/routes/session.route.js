import { Router } from 'express';
import { getSession, postProof } from '../controllers/session.controller.js';
const router = Router();

router.get('/', getSession);

router.post('/:id/proof', postProof);

export default router;