import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";

const Home = () => {
  const [projects, setProjects] = useState(null);

  // test effect hook dependency
  const [Name, setName] = useState("Peter");

  useEffect(() => {
    fetch("http://localhost:8080/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div>
      {projects && <ProjectList projects={projects} title="lalala" Name={Name} />}
      <button onClick={() => setName("Tim")}>change name</button>
    </div>
  );
};

export default Home;
