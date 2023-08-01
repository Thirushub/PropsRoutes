import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';

const Routes=() =>{
  const name="Thiru";
const description="This is desc";
return(
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/" render={()=><Home name={name}/>}/>
      <Route path="/about" render={()=><About description={description}/>}/>
    </Switch>
  </Router>
);
};
export default Routes;
