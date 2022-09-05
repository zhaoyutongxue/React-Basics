<<<<<<< Updated upstream
const Home = () => {
  return <h2>Home Page</h2>;
=======
import { useState, useEffect } from "react";
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
>>>>>>> Stashed changes
};

export default Home;
