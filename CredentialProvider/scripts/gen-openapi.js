import swaggerAutogen from 'swagger-autogen';

const PORT = process.env.PORT || 3001;

const doc = {
  info:    { title: 'DKWallet – CredentialProvider', version: '1.0.0' },
  servers: [ { url: `http://localhost:${PORT}/` } ],
};

const outputFile     = './openapi/credential-api.json';
const endpointsFiles = ['./index.js', './src/routes/**/*.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)
  .then(() => console.log('openapi generated at', outputFile));
