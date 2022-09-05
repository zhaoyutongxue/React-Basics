import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";

const Home = () => {
  const [projects, setProjects] = useState(null);
  const handleDelete = (id) => {
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  // test effect hook dependency
  const [Name, setName] = useState("Peter");
  useEffect(() => {
    return () => {
      console.log("useEffect is working!!!");
    };
  }, [Name]);

  return (
    <div>
      <ProjectList projects={projects} title="lalala" handleDelete={handleDelete} Name={Name} />
      <button onClick={() => setName("Tim")}>change name</button>
    </div>
  );
};

export default Home;
