import { useState } from "react";
import ProjectList from "./ProjectList";

const Home = () => {
  const [projects, setProjects] = useState([
    {
      title: "Pretty Good Restaurants",
      body: "this is the website where friends can share their favourite restaurants",
      author: "Henry",
      id: 1,
    },
    {
      title: "auto tester",
      body: "this is the tester that can test devices efficiently",
      author: "Elsafe",
      id: 2,
    },
    {
      title: "another react project",
      body: "this is the project that uses TypeScript and React JS",
      author: "Henry React",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newProjects = projects.filter((project) => project.id !== id);
    setProjects(newProjects);
  };

  return (
    <div>
      <ProjectList projects={projects} title="lalala" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
