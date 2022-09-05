const ProjectList = (props) => {
  //   destructure props
  const { projects, title, handleDelete, Name } = props;

  return (
    <div>
      <div>
        <h1>happy coding {title}</h1>
      </div>
      {projects.map((project) => (
        <div className="project-preview" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.body}</p>
          <h2>written by {project.author}</h2>
          <button onClick={() => handleDelete(project.id)}>delete {project.title}</button>
        </div>
      ))}
      <h4>who's Henry's collegue: {Name}</h4>
    </div>
  );
};

export default ProjectList;
