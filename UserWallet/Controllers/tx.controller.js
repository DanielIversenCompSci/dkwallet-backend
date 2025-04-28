export const recordTx = (req, res) => {
    console.log('TX-LOG:', req.body);
    res.status(201).json({ received: req.body });
  };