import express from "express";
const router = express.Router();
import { fetchPosts } from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/fetchPosts").post(protect, fetchPosts);

export default router;
