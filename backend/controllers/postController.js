import asyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

const fetchPosts = asyncHandler(async (req, res) => {
  try {
    const { page, limit } = req.body;

    // console.log(page);
    // console.log(limit);

    const pageno = Number(page);
    const limitno = Number(limit);

    const find = await Post.find();
    let hasMore = true;

    if (limitno * pageno >= find.length) {
      hasMore = false;
    }

    const postItems = await Post.find()
      .skip(limitno * pageno) //check for Number
      .limit(limitno); // check for Number
    // .sort("-createdAt");

    res.status(200).json({ postItems, hasMore });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

export { fetchPosts };
