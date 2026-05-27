import { useEffect } from "react";
import API from "../api/axios";

function Test() {
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get("/blogs");
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();

  }, []);

  return (
    <div>
      Backend Connected
    </div>
  );
}

export default Test;