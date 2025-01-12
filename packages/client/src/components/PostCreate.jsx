import { useState } from "react";
import axios from "axios";
const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    if (title.trim() !== "") {
      await axios.post("http://localhost:4000/posts", {
        title,
      });
      setTitle("");
      setError("");
    } else {
      setError("This field is required");
    }
  };

  return (
    <>
      <form className="py" onSubmit={onSubmitForm}>
        <label className="form-label">Title</label>
        <input
          value={title}
          onChange={handleInputChange}
          className="form-control form-control-sm p-2"
          type="text"
          placeholder="entry text..."
        />
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary p-1 mt-2" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default PostCreate;
