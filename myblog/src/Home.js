import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";

const Home = () => {
  const [projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch("http://localhost:8080/projects");
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };
    getProjects();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>is loading...</div>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Home;
