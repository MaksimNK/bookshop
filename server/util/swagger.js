import path from 'path';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

// Get the directory of the current module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Resolve the path to the swagger.yaml file
const swaggerPath = path.join(__dirname, './swagger.yaml');
const swaggerDocument = YAML.load(swaggerPath);

export const setupSwagger = (app) => {
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
