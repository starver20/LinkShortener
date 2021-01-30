import mongoose, { Schema } from "mongoose";
import shortid from "shortid";

const schema = mongoose.Schema;

const urlSchema = new Schema({
  shortId: {
    type: String,
    required: true,
    default: shortid.generate(),
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("url", urlSchema);
