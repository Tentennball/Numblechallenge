const path = require('path');
const { logger } = require('./config/logger');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
});

const testRoutes = require('./routes/test');
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctor');

const MONGODB_URI =
  'mongodb+srv://tentenball:dlxogns831@challenge1.xfvontt.mongodb.net/test';

dotenv.config();
app.use(testRoutes);
app.use(authRoutes);
app.use(doctorRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });