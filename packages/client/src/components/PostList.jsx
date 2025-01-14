import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CreateComment from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const hasFetch = useRef(false);
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    if (!hasFetch.current) {
      fetchPosts();
      hasFetch.current = true;
    }
  }, []);

  const renderPost = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        key={post.id}
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        <CommentList comments={post.comments} />
        <CreateComment postId={post.id} />
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
