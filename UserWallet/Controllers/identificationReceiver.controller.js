// In-memory storage for identification cards (would be replaced by a database in production)
const identificationStore = {
  idCards: []
};

//# View all stored ID cards in the wallet
//curl http://localhost:3002/identificationReceiver/idcard

/**
 * Stores a new ID Card in the wallet
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
// Handler for receiving ID cards from the CredentialProvider
export const storeIdCard = (req, res) => {
  console.log('Received ID card request:', req.body);
  
  try {
    const { credential } = req.body;
    
    // Some simple credential validation we can expand on later
    if (!credential || !credential.id || !credential.holder) {
      return res.status(400).json({
        error: 'Invalid ID card format',
        message: 'The ID card must include an id and holder information'
      });
    }
    
    // Add receipt timestamp
    const storedIdCard = {
      ...credential,
      receivedAt: new Date().toISOString()
    };
    
    // Store the ID card in memory -> Can now be fetched with UserWallet GET endpoint aswell
    identificationStore.idCards.push(storedIdCard);
    
    console.log(`Stored new ID card with ID: ${storedIdCard.id}`);
    
    return res.status(201).json({ 
      message: 'ID Card stored successfully in wallet',
      idCardId: storedIdCard.id
    });
  } catch (error) {
    console.error('Error storing ID card:', error);
    return res.status(500).json({
      error: 'Failed to store ID card',
      message: error.message
    });
  }
};

/**
 * Lists all ID Cards stored in the wallet
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const listIdCards = (req, res) => {
  return res.status(200).json({
    message: 'Retrieved ID cards',
    idCards: identificationStore.idCards
  });
};