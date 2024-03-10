import axios from "axios";
import { proxy } from "../../config/default";

const API_URL = `${proxy}/api/post/`;

// Fetch Posts
const fetchPosts = async (fetchData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "/fetchPosts", fetchData, config);

  // console.log(response.data);

  return response.data;
};

const postService = {
  fetchPosts,
};

export default postService;
