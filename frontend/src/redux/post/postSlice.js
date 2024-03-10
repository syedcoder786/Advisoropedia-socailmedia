import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";
// import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  limit: 5,
  page: 0,
  hasMore: true,
};

// fetch posts
export const fetchPosts = createAsyncThunk(
  "post/fetch",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const page = thunkAPI.getState().post.page;
      const limit = thunkAPI.getState().post.limit;
      return await postService.fetchPosts({ page, limit }, token);
    } catch (error) {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const addLivePost = createAsyncThunk

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  // for backend request
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.hasMore = action.payload.hasMore;
        state.posts = [...state.posts, ...action.payload.postItems];
        state.page = state.page + 1;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
