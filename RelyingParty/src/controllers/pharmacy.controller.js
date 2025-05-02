

const WALLET_URL = process.env.WALLET_URL || 'http://localhost:3002';

export const requestMedicine = async (req, res) => {
  const sessionId = `sess-${Date.now()}`;

  // what claims we need
  const requestedClaims = ['natId', 'prescriptionId'];

  console.log(`[RP] session=${sessionId} → asking wallet for claims`, requestedClaims);
  // ask the wallet
  const walletRes = await fetch(`${WALLET_URL}/rx-proof`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, requestedClaims })
  });

  const { proof } = await walletRes.json();
  console.log(`[RP] session=${sessionId} ← wallet proof`, JSON.stringify(proof));


  // dummy verification
  const ok =
    proof?.prescriptionId === 'RX-42' &&
    proof?.natId === '123456-7890';

    if (!ok) {
      console.log(`[RP] session=${sessionId} ❌ invalid proof`);
      return res.status(400).json({ error: 'invalid proof' });
    }

  console.log(`[RP] session=${sessionId} ✅ dispensing medicine for`, proof.natId);
  res.json({ dispensed: true, who: proof.natId });
  /* send receipt back to wallet */
  await fetch(`${WALLET_URL}/rx-receipt`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId,
      natId: proof.natId,
      prescriptionId: proof.prescriptionId,
      dispensed: true
    })
  });
};
