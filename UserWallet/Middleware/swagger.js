import swaggerUI from 'swagger-ui-express';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const openapiDoc = YAML.parse(
  readFileSync(resolve(__dirname, '../openapi/wallet-api.yaml'), 'utf8')
);

// write a function …
function initSwagger(app) {
  app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(openapiDoc, { explorer: true })
  );
}

// …and export it as **default**
export default initSwagger;
