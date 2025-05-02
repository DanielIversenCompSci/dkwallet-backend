// In-memory storage for credentials (would be replaced by a database in production)
const walletStore = {
  credentials: []
};

/**
 * Records a transaction in the user's wallet
 * Handles different types of transactions including ID card issuance
 */
export const recordTx = (req, res) => {
  console.log('TX-LOG:', req.body);
  
  // Handle different transaction types
  switch (req.body.type) {
    case 'ID_CARD_ISSUANCE':
      // Process and store the ID card credential
      if (req.body.credential) {
        const credential = req.body.credential;
        
        // Add receipt timestamp
        credential.receivedAt = new Date().toISOString();
        
        // Store the credential
        walletStore.credentials.push(credential);
        
        console.log(`Stored new ID card credential with ID: ${credential.id}`);
        
        return res.status(201).json({ 
          message: 'ID Card credential stored successfully',
          credentialId: credential.id,
          received: req.body 
        });
      } else {
        return res.status(400).json({
          error: 'Invalid ID card transaction',
          message: 'Credential data is missing'
        });
      }
    
    // Handle other transaction types
    default:
      // Default handling for unknown transaction types
      return res.status(201).json({ received: req.body });
  }
};