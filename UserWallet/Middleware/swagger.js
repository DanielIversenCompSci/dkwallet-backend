// Middleware/swagger.js  – JSON version
import swaggerUI     from 'swagger-ui-express';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname   = dirname(fileURLToPath(import.meta.url));
const openapiDoc  = JSON.parse(
  readFileSync(resolve(__dirname, '../openapi/wallet-api.json'), 'utf8')
);

function initSwagger(app) {
  app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(openapiDoc, { explorer: true })
  );
}

export default initSwagger;
