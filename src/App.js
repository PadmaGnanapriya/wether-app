import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Wind from "./Wind";
import Rain from "./Rain";
import Temperature from "./Temperature";


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
              <Route path='/wind'>
                  <Wind/>
              </Route>
              <Route path='/rain'>
                  <Rain/>
              </Route>
              <Route path='/temperature'>
                  <Temperature/>
              </Route>
              <Route path='/'>
                  <Signin/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
