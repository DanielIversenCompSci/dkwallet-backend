// RelyingParty/routes/ping.route.js
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  // stub: always returns ACK
  res.json({ msg: 'pong from RelyingParty service (ACK)' });
});

export default router;
