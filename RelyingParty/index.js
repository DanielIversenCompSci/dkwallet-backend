import dotenv from 'dotenv';
import express from 'express';
import pingRouter    from './src/routes/ping.route.js';
import sessionRouter from './src/routes/session.route.js';
import pharmacyRoutes from './src/routes/pharmacy.route.js';
import purchaseRouter from './src/routes/purchase.route.js';
import initSwagger from './Middleware/swagger.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/ping',    pingRouter);
app.use('/session', sessionRouter);
app.use('/pharmacy', pharmacyRoutes);
app.use('/purchase', purchaseRouter);

initSwagger(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`RelyingParty service is running http://localhost:${PORT}`);	
    
})