import Navbar from "./Navbar";
import Home from "./Home";

// this is the app component
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// we always export our component function so that we can use it in other files.
// as you can see we import app.js in the index.js file.
export default App;
