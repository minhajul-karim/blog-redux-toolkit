import React from "react";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

export default function Main() {
  return (
    <section className="wrapper">
      <Sidebar />
      <Posts />
    </section>
  );
}
