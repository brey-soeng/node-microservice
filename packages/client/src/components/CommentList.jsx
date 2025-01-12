import { useState, useEffect } from "react";
import axios from "axios";
const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  const renderCommentList = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  useEffect(() => {
    fetchComments();
  }, []);

  return <ul>{renderCommentList}</ul>;
};

export default CommentList;
