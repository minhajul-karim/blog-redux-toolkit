import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlog } from "./blogAPI";

// Initial state
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  blog: [],
};

// Async thunk
export const getBlog = createAsyncThunk("blog/fetchBlog", async (blogId) => {
  const blog = await fetchBlog(blogId);
  return blog;
});

// Create slice
const blogsSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.blog = {};
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
