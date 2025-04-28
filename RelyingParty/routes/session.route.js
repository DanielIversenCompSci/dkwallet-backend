import { Router } from 'express';
const router = Router();

router.get('/',(req, res) => {
    res.json({
        sessionId: 'PlaceholderSessionID',
        challenge: 'PlaceholderChallenge'
    });
});

router.post('/:id/proof', (req, res) => {
    res.json({
        status: 'recieved',
        sessionId: req.params.id,
        challenge: req.body
    });
});

export default router;