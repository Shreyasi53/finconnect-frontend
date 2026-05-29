import { useEffect, useState } from "react";
import API from "../api/axios";

function Test() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await API.get("/v1/blogs");
      setBlogs(res.data.blogs);
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>

      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Test;