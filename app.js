import path from 'path';
import { logger } from './config/logger.js';
import express, { json, urlencoded } from 'express';
import bodyParser from 'body-parser';
import mongopkg from 'mongoose';
const { connect } = mongopkg;
const app = express();
import { config } from 'dotenv';
app.use(json());
app.use(urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
});

import testRoutes from './routes/test.js';
import authRoutes from './routes/auth.js';
import doctorRoutes from './routes/doctor.js';

const MONGODB_URI =
  'mongodb+srv://tentenball:dlxogns831@challenge1.xfvontt.mongodb.net/test';

config();
app.use(testRoutes);
app.use(authRoutes);
app.use(doctorRoutes);

connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });