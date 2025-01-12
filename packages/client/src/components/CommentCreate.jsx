import { useState } from "react";
import axios from "axios";
const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (content.trim()) {
      await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        postId,
        content,
      });
      setContent("");
      setError("");
    } else {
      setError("This is is required");
    }
  };

  return (
    <div className="p-3">
      <form onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>New comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
          {error && <p className="text-danger mt-1">{error}</p>}
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
