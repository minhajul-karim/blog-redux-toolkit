import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlog } from "../features/blog/blogSlice";
import Loader from "./Loader";

export default function BlogDescription() {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const blogState = useSelector((state) => state.blog);
  const { isLoading, isError, error, blog } = blogState;

  useEffect(() => {
    dispatch(getBlog(blogId));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && !blog?.id) {
    return <div className="col-span-12">Video not found!</div>;
  }

  let savedBtnContent = null;
  if (blog.isSaved) {
    savedBtnContent = (
      <button className="active save-btn" id="lws-singleSavedBtn">
        <i className="fa-regular fa-bookmark" /> Saved
      </button>
    );
  } else {
    savedBtnContent = (
      <button className="save-btn" id="lws-singleSavedBtn">
        <i className="fa-regular fa-bookmark" /> Save
      </button>
    );
  }

  const tagsContent = blog.tags.map((tag, index) => {
    if (index === blog.tags.length - 1) {
      return <span key={tag}>{`#${tag}`}</span>
    }
    return <span key={tag}>{`#${tag}`}, </span>
  });

  let content = null;
  if (!isLoading && !isError && blog?.id) {
    content = (
      <>
        <img
          src={blog.image}
          alt="githum"
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {blog.title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {tagsContent}
          </div>
          <div className="btn-group">
            {/* handle like on button click */}
            <button className="like-btn" id="lws-singleLinks">
              <i className="fa-regular fa-thumbs-up" /> {blog.likes}
            </button>
            {/* handle save on button click */}
            {savedBtnContent}
          </div>
          <div className="mt-6">
            <p>{blog.description}</p>
          </div>
        </div>
      </>
    );
  }

  return <main className="post">{content}</main>;
}
