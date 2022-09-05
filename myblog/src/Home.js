import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";

const Home = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return <div>{projects && <ProjectList projects={projects} title="lalala" />}</div>;
};

export default Home;
