import axios from "axios";
import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPost = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        key={post.id}
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h4>{post.id}</h4>
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>Posts</h1>
      <div className="d-flex flex-wrap justify-content-between flex-row">
        {renderPost}
      </div>
    </>
  );
};

export default PostList;
