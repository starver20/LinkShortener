import mongoose, { Schema } from "mongoose";
import shortid from "shortid";

const schema = mongoose.Schema;

interface urlAttrs {
  shortUrl: string;
  url: string;
}

interface urlDoc extends mongoose.Document {
  shortUrl: string;
  url: string;
}

const urlSchema = new schema({
  shortUrl: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const URL = mongoose.model<urlDoc>("URL", urlSchema);

export { URL };
