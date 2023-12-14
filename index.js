const express = require('express');
const app = express();
const connection = require('./mongoDb/mongoose');
const router = require('./router/router');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger/swaggerConfig');

connection();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/', router);

app.use((req, res, next) => {
  res.status(404).json('Page not found');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
