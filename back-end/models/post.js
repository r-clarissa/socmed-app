import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  author: { type: String, required: true },
  timestamp: { type: Date, required: true },
  content: { type: String, required: true }
});

mongoose.model("Post", PostSchema);