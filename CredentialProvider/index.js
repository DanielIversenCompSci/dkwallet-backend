import express from 'express';
import dotenv from 'dotenv';
import pingRoutes from './src/routes/ping.route.js';
import identifyRoutes from './src/routes/identify.route.js';

dotenv.config();

const PORT = process.env.PORT ?? 3001; // fallback port
const app  = express();

// Mount routes
app.use(express.json());
app.use('/', pingRoutes); // mount all ping-related routes
app.use('/', identifyRoutes); // mount all identify-related routes

app.listen(PORT, () => {
  console.log(`🚀 CredentialProvider running → http://localhost:${PORT}`);
  console.log(`curl http://localhost:${PORT}/ping`);
});
