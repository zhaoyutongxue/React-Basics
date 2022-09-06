import { Link } from "react-router-dom";

const ProjectList = (props) => {
  //   destructure props
  const { projects, title } = props;

  return (
    <div>
      <div>
        <h1>happy coding {title}</h1>
      </div>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <Link to={`/projects/${project.id}`}>
            <h3>{project.title}</h3>
          </Link>
          <p>{project.body}</p>
          <h2>written by {project.author}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
