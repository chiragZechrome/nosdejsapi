require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.DB_URL;
// const connectionString = "mongodb+srv://chiragzechrom:mdEwXoF8OzKXCXy1@mongousers.w4n9z1q.mongodb.net/College";


console.log('DB_URL:', connectionString);
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

module.exports = mongoose.connection;
