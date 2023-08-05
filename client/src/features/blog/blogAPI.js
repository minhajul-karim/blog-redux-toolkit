import axios from "../../utils/axios";

export async function fetchBlog(blogId) {
  const response = await axios.get(`/blogs/${blogId}`);
  return response.data;
}
