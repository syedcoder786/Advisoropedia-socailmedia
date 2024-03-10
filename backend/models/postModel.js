import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    user: {
      name: {
        type: String,
        required: true,
      },
      profile_url: {
        type: String,
        required: true,
      },
    },
    title: {
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
