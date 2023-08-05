import React from "react";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <section className="wrapper">
      <Sidebar />
      <Posts />
    </section>
  );
}
