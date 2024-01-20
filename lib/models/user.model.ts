import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: "string", required: true },
  username: { type: "string", required: true, unique: true },
  name: { type: "string", required: true },
  image: { type: "string" },
  bio: { type: "string" },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  onboarded: { type: "boolean", default: false },
  communities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Communities",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User