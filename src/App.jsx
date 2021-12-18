import "./Assets/scss/normalize.scss";
import "./App.scss";



import { Route, Switch  } from "react-router";

// components
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/"><Home /></Route>
      </Switch>
    </>
  );
}

export default App;
