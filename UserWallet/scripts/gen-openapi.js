import swaggerAutogen from 'swagger-autogen';

const PORT = process.env.PORT || 3002;

const doc = {
  info:    { title: 'DKWallet – UserWallet', version: '1.0.0' },
  servers: [ { url: `http://localhost:${PORT}/` } ],
};

const outputFile      = './openapi/wallet-api.json';
const endpointsFiles  = ['./index.js', './Routes/**/*.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)
  .then(() => console.log('openapi generated at', outputFile));
