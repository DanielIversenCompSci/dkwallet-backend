/**
 * Controller for the identify endpoints
 */

/**
 * Responds with information about the CredentialProvider service
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

/*
Test with:
GET:
curl http://localhost:3001/identify

POST:
curl -X POST http://localhost:3001/identify \
  -H "Content-Type: application/json" \
  -d '{"userId": "123", "purpose": "authentication"}'
*/
export const identifyResponse = (req, res) => {
    const serviceInfo = {
      name: 'CredentialProvider',
      version: '1.0.0',
      description: 'A service for providing and managing digital credentials',
      status: 'operational',
      timestamp: new Date().toISOString()
    };
    
    console.log('GET /identify request received');
    res.json(serviceInfo);
  };
  
  /**
   * Handles incoming identify requests and prints the data
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   **/
  export const indetifyRequest = (req, res) => {
    const requestData = req.body;
    
    console.log('POST /identify request received with data:');
    console.log(JSON.stringify(requestData, null, 2));
    
    res.status(200).json({
      message: 'Request received successfully',
      receivedData: requestData
    });
  };