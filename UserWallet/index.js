// index.js
import express from 'express';
import dotenv  from 'dotenv';
import logger  from './Middleware/logger.js';
import walletRoutes from './Routes/wallet.route.js';

dotenv.config();
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(logger);
app.use('/', walletRoutes);

// ─── export for tests ──────────────────────────────────────────
export default app;

// ─── start server only if not under Jest ───────────────────────
if (process.env.JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => {
    console.log(`🚀 UserWallet service running → http://localhost:${PORT}`);
  });
}
