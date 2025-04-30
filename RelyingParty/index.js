import 'dotenv/config';               
import express from 'express';
import pingRouter    from './src/routes/ping.route.js';
import sessionRouter from './src/routes/session.route.js';
import purchaseRouter from './src/routes/purchase.route.js';

const app = express();
app.use(express.json());

app.use('/ping',    pingRouter);
app.use('/session', sessionRouter);
app.use('/purchase', purchaseRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`RelyingParty service is running http://localhost:${PORT}`);	
    
})