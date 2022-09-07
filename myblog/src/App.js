import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import NothingFound from "./NothingFound";

// this is the app component
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path exact={"/"}>
              <Home />
            </Route>
            <Route path={"/create"}>
              <Create />
            </Route>
            <Route path={"/projects/:id"}>
              <ProjectDetail />
            </Route>
            <Route path={"*"}>
              <NothingFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// we always export our component function so that we can use it in other files.
// as you can see we import app.js in the index.js file.
export default App;
