import express from "express";
import { urlRouter } from "./routes/url";

const app = express();

app.use(urlRouter);

app.listen(3000, () => {
  console.log("connected to 3000");
});
