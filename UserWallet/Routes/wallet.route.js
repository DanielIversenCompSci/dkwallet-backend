import { Router }      from 'express';
import { ping }        from '../Controllers/health.controller.js';
import { recordTx }    from '../Controllers/tx.controller.js';

const router = Router();

router.get('/ping',        ping);
router.post('/transactions', recordTx);


export default router;
