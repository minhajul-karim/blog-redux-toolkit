import React from "react";
import { Link } from "react-router-dom";
import BlogDescription from "../components/BlogDescription";
import RelatedPosts from "../components/RelatedPosts";

export default function BlogDetails() {
  return (
    <>
      {/* Go Home / Go Back */}
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house" />
          Go Home
        </Link>
      </div>
      <section className="post-page-container">
        <BlogDescription />
        <RelatedPosts />
      </section>
    </>
  );
}
