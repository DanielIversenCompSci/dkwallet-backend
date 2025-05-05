import swaggerUI        from 'swagger-ui-express';
import { readFileSync }  from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath }  from 'node:url';

const __dirname  = dirname(fileURLToPath(import.meta.url));
const openapiDoc = JSON.parse(
  readFileSync(resolve(__dirname, '../openapi/relyingparty-api.json'), 'utf8')
);

export default function initSwagger(app) {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiDoc, { explorer: true }));
}
