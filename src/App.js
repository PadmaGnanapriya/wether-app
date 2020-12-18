import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>

              <Route path='/signin'>
                  <Signin/>
              </Route>
              <Route path='/Signup'>
                  <Signup/>
              </Route>
              <Route path='/home'>
                  <Home/>
              </Route>
              <Route path='/'>
                  <Home/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
