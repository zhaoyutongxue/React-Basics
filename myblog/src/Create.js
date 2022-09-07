import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setContent] = useState("");
  const [author, setAuthor] = useState("Henry React");
  const [isAdding, setIsAdding] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { title, body, author };

    setIsAdding(true);

    fetch("http://localhost:8080/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    }).then(() => {
      console.log("new project added");
      setIsAdding(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a new project!</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label>Project Content:</label>
        <textarea
          required
          type="text"
          value={body}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>

        <label>Project Author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Henry React">Henry React</option>
          <option value="Henry Electrical">Henry Electrical</option>
        </select>

        {!isAdding && <button>add Project</button>}
        {isAdding && <button disabled>adding Project...</button>}
      </form>
    </div>
  );
};

export default Create;
