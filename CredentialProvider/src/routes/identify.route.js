// src/routes/user.routes.js
import { Router } from 'express';
import {
  identifyResponse,
  indetifyRequest
} from '../controllers/identify.controller.js';

const router = Router();

router.get('/identify', identifyResponse);    // HTTP GET
router.post('/identify', indetifyRequest);  // HTTP POST

export default router;
