import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlogs } from "./blogsAPI";

// Initial state
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  blogs: [],
};

// Async thunk
export const getBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await fetchBlogs();
  return blogs;
});

// Create slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.blogs = [];
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
