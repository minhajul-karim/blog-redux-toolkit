import axios from "../../utils/axios";

export async function fetchBlogs() {
  const response = await axios.get("/blogs");
  return response.data;
}
