import express from 'express';
import { urlRouter } from './routes/url';
import mongoose from 'mongoose';
import { env } from './env/env';

const app = express();

app.use(express.json());
app.use(urlRouter);

mongoose.connect(env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(3000, () => {
  console.log('connected to 3000');
});
