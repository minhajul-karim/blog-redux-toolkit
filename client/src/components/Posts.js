import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogsSlice";
import Loader from "./Loader";

export default function Posts() {
  const dispatch = useDispatch();
  const { blogs: blogsState } = useSelector((state) => state);
  const { isLoading, isError, blogs, error } = blogsState;

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  let content = null;
  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && blogs.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isLoading && blogs.length > 0) {
    content = blogs.map((blog) => {
      return <Post key={blog.id} blog={blog} />;
    });
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
