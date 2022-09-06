import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProjectDetail = () => {
  const { id } = useParams();
  const { data: project, isPending, error } = useFetch("http://localhost:8080/projects/" + id);
  return (
    <div className="project-details">
      <h2>Project Details</h2>
      {project && (
        <article>
          <h3>{project.title}</h3>
          <p>{project.body}</p>
          <p>written by {project.author}</p>
        </article>
      )}
    </div>
  );
};

export default ProjectDetail;
