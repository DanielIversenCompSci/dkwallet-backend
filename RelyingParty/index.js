import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const app  = express();

app.use(express.json());

// one test route ***
app.get('/ping', (req, res) => res.json({msg: 'pong from RelyingParty service (ACK)'}));

// on startup ***
app.listen(PORT, () => {
  console.log(`🚀 CredentialProvider serivce running → http://localhost:${PORT}`);
  console.log(`'curl http://localhost:${PORT}/ping' in a new terminal to perform a ping test`);
});
