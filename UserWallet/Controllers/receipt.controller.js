export const receiveReceipt = (req, res) => {
    const { sessionId, natId, prescriptionId, dispensed } = req.body;
  
    console.log(
      `[WALLET] session=${sessionId} ✅ receipt for ${prescriptionId} ` +
      `(natId=${natId}) dispensed=${dispensed}`
    );
  
    res.status(204).end();           // no body needed
  };
  