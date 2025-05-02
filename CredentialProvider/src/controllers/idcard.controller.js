/**
 * Controller for the digital ID card endpoints
 */

import fetch from 'node-fetch';

/**
 * Handles requests from users asking for their digital ID card
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

/*
Test with:
POST:
curl -X POST http://localhost:3001/idcard/request
*/
// Controller that handles user requests for ID cards
export const requestIdCard = async (req, res) => {
  // User sends empty request to this endpoint
  console.log('POST /idcard/request received - user asked for ID card');
  
  try {
    // Generate a fictive ID card with unique identifier
    const idCard = {
      id: `ID-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      type: 'Digital ID Card',
      issuedAt: new Date().toISOString(),
      validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // Valid for 1 year
      holder: {
        firstName: "Jane",
        lastName: "Doe",
        dateOfBirth: "1985-04-30",
        nationality: "Danish"
      },
      issuer: 'DK Wallet Credential Provider',
      status: 'active'
    };
    
    // Send the ID card to the UserWallet service using the dedicated endpoint
    console.log('Forwarding ID card to UserWallet service...');
    
    // Forward the ID card to the UserWallet service
    const userWalletPort = process.env.USER_WALLET_PORT || 3002;
    const userWalletUrl = `http://localhost:${userWalletPort}/identificationReceiver/idcard`;
    
    const walletResponse = await fetch(userWalletUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        credential: idCard
      }),
    });
    
    const walletData = await walletResponse.json();
    
    if (walletResponse.status !== 201) {
      throw new Error('Failed to send ID card to UserWallet');
    }
    
    // Respond to the user with success
    res.status(200).json({
      message: 'Your digital ID has been issued and sent to your wallet',
      walletResponse: walletData
    });
    
    // Bit of error handling
  } catch (error) {
    console.error('Error while processing ID card request:', error);
    res.status(500).json({
      error: 'Failed to process ID card request',
      message: error.message
    });
  }
};