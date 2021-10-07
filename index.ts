import express from 'express';
import { urlRouter } from './routes/url';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(urlRouter);

mongoose.connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(process.env.PORT || 3000, () => {
  console.log('connected to 3000');
});
