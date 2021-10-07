import express from 'express';
import { urlRouter } from './routes/url';
import mongoose from 'mongoose';
import cors, { CorsOptions } from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const corsOptions: CorsOptions = {
  origin: '*', // can be array of frontneds as well
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(urlRouter);

mongoose.connect(
  `mongodb+srv://NewAmar:OfuAR4iKLMjZsQan@newamar.9xxre.mongodb.net/UrlShort?authSource=admin&replicaSet=atlas-o5fwhb-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.listen(process.env.PORT || 4000, () => {
  console.log('connected to 4000');
});
