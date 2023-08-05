import React from "react";
import { Link } from "react-router-dom";

export default function Post({ blog }) {
  let isSavedContent = null;
  if (blog.isSaved) {
    isSavedContent = (
      <div className="flex gap-2 mt-4">
        <span className="lws-badge"> Saved </span>
      </div>
    );
  }

  const tagsContent = blog.tags.map((tag, index) => {
    if (index === blog.tags.length - 1) {
      return <span key={tag}>{`#${tag}`}</span>
    }
    return <span key={tag}>{`#${tag}`}, </span>
  });

  return (
    <div className="lws-card">
      <Link to={`blogs/${blog.id}`}>
        <img src={blog.image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{blog.createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up" />
            {blog.likes}
          </p>
        </div>
        <Link to={`blogs/${blog.id}`} className="lws-postTitle">
          {" "}
          {blog.title}{" "}
        </Link>
        <div className="lws-tags">
          {tagsContent}
        </div>
        {isSavedContent}
      </div>
    </div>
  );
}
