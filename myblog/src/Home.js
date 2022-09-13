import ProjectList from "./ProjectList";
import useFetch from "./useFetch";
import GreetingModal from "./GreetingModal";
const Home = () => {
  const { data: projects, isPending, error } = useFetch("http://localhost:8080/projects");

  return (
    <div>
      <GreetingModal />
      {error && <div>{error}</div>}
      {isPending && <div>is loading...</div>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};

export default Home;
