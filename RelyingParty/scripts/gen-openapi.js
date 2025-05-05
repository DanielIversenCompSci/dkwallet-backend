import swaggerAutogen     from 'swagger-autogen';
import { resolve, dirname } from 'node:path';
import { fileURLToPath }   from 'node:url';

const __dirname  = dirname(fileURLToPath(import.meta.url));
const PORT       = process.env.PORT || 3000;

const doc = {
  info:    { title: 'DKWallet – RelyingParty', version: '1.0.0' },
  servers: [ { url: `http://localhost:${PORT}/` } ],
};

const outputFile     = resolve(__dirname, '../openapi/relyingparty-api.json');
const endpointsFiles = [
  './index.js',
  './src/routes/**/*.js',
];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)
  .then(() => console.log('openapi generated at', outputFile));
