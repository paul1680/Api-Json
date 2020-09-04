import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './component/Home/Home';
import Nomatch from './component/Nomatch/Nomatch';
import Details from './Details/Details';



function App() {


  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/details/:fId">
          <Details/>
        </Route>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="*">
            <Nomatch/>
          </Route>
      </Switch>
    </Router>

  );
}

export default App;
