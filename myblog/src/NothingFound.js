import { useHistory } from "react-router-dom";

const NothingFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <h2>Sorry, nothing here</h2>
      <button onClick={handleClick}>Navigate back to Home page</button>
    </div>
  );
};

export default NothingFound;
