import express from 'express';
import { urlRouter } from './routes/url';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(urlRouter);

mongoose.connect(
  `mongodb+srv://NewAmar:OfuAR4iKLMjZsQan@newamar.9xxre.mongodb.net/UrlShort?authSource=admin&replicaSet=atlas-o5fwhb-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.listen(process.env.PORT || 3000, () => {
  console.log('connected to 3000');
});
