import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProjectDetail = () => {
  const { id } = useParams();
  const url = "http://localhost:8080/projects/" + id;
  const { data: project, isPending, error } = useFetch(url);
  const history = useHistory();

  const deleteHandler = () => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(history.push("/"));
  };
  return (
    <div className="project-details">
      <h2>Project Details</h2>
      {project && (
        <article>
          <h3>{project.title}</h3>
          <p>{project.body}</p>
          <p>written by {project.author}</p>
          <button onClick={deleteHandler}>Delete this project</button>
        </article>
      )}
    </div>
  );
};

export default ProjectDetail;
