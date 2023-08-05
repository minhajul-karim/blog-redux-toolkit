import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Layout from "./pages/Layout";
import "./main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
