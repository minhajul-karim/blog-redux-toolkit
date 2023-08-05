import React from "react";
import GitImg from "./assets/git.webp";
import AiImg from "./assets/ai.jpg";

export default function RelatedPosts() {
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {/* related post  */}
        <div className="card">
          <a href="post.html">
            <img src={GitImg} className="card-image" alt="" />
          </a>
          <div className="p-4">
            <a
              href="post.html"
              className="text-lg post-title lws-RelatedPostTitle"
            >
              Top Github Alternatives
            </a>
            <div className="mb-0 tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <p>2010-03-27</p>
          </div>
        </div>
        {/* related post ends */}
        {/* related post  */}
        <div className="card">
          <a href="post.html">
            <img src={AiImg} className="card-image" alt="" />
          </a>
          <div className="p-4">
            <a
              href="post.html"
              className="text-lg post-title lws-RelatedPostTitle"
            >
              The future of Artificial Inteligence
            </a>
            <div className="mb-0 tags">
              <span>#python,</span> <span>#tech,</span> <span>#git</span>
            </div>
            <p>2020-07-15</p>
          </div>
        </div>
        {/* related post ends */}
      </div>
    </aside>
  );
}
