const swaggerJsdoc = require('swagger-jsdoc');

const BearerAuth = {
  type: 'apiKey',
  name: 'Authorization',
  scheme: 'bearer',
  in: 'header',
};

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Role-Based Authorization',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        BearerAuth,
      },
    },
  },
  apis: ['./swagger/authSwagger.js', './swagger/userAdminSwagger.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
