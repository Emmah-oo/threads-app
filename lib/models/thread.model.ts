import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: { type: "string", required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: { type: "string" },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thread" }],
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);
// console.log(mongoose.Schema.Types.ObjectId)
export default Thread;
