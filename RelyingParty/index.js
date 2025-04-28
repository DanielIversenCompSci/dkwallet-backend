import 'dotenv/config';               
import express from 'express';
import pingRouter    from './routes/ping.route.js';
import sessionRouter from './routes/session.route.js';

const app  = express();
app.use(express.json());

app.use('/ping', pingRouter);
app.use('/session', sessionRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("RelyingParty service is running http://localhost:${PORT}");	
})