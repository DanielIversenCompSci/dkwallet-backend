// index.js
import express from 'express';
import dotenv  from 'dotenv';
import logger  from './Middleware/logger.js';
import walletRoutes from './Routes/wallet.route.js';
import rxRoutes from './Routes/rx.route.js';
import receiptRoutes from './Routes/receipt.route.js';

import initSwagger from './Middleware/swagger.js';

dotenv.config();
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(logger);
//mount routes
app.use('/', walletRoutes);
app.use('/', rxRoutes);
app.use('/', receiptRoutes);


initSwagger(app);

// ─── export for tests ──────────────────────────────────────────
export default app;

// ─── start server only if not under Jest ───────────────────────
if (process.env.JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => {
    console.log(`🚀 UserWallet service running → http://localhost:${PORT}`);
  });
}
