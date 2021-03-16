import { Schema, model, models } from "mongoose";

const { Types } = Schema;

export const PostSchema = new Schema({
  pdf_url: Types.String,
  audio_url: Types.String,
  title: Types.String,
  category: { type: Types.ObjectId, ref: "category" },
});

export default models.post || model("post", PostSchema);
