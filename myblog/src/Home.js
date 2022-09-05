import { useState, useEffect } from "react";
import ProjectList from "./ProjectList";

const Home = () => {
  const [projects, setProjects] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/projects")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        const result = res.json();
        return result;
      })
      .then((data) => {
        setError(false);
        setProjects(data);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
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
