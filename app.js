const express = require('express');
const cors = require('cors');
const { databaseConfig } = require('./src/config');
const routes = require('./src/routes/userRoutes');
const credentialRoutes = require('./src/routes/credentialRoutes');
require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

databaseConfig.once('open', () => {
  console.log('Database connected successfully');
});

databaseConfig.on('error', (error) => {
  console.error('Database connection error:', error);
});

// app.use((req, res, next) => {
//   console.log('http method: ' + req.method + ' , url: ' + req.url);
//   next();
// });

app.use('/users', routes);
app.use('/', credentialRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// app.listen(3000, () => {
//   console.log(`Server listening on port ${3000}`);
// });
