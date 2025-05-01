import { walletStore } from '../lib/db.js';

export const provideProof = (req, res) => {
  const { sessionId, requestedClaims } = req.body;

  // pick only the fields RP asked for
  const revealed = {};
  for (const claim of requestedClaims) {
    revealed[claim] = walletStore.personIdVc[claim];
  }

  console.log(
    `[WALLET] session=${sessionId} → sending proof`, 
    JSON.stringify(revealed)
  );

  res.json({ sessionId, proof: revealed });
};
