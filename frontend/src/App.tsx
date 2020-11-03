import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/post/Post';
import Edit from './components/post/Edit';
import Create from './components/post/Create';
import Onboarding from './components/admin/Onboarding';
// import { Router } from '@material-ui/icons';
import { Router } from "react-router-dom";
import history from "./utils/history";
import PrivateRoute from "./contexts/PrivateRoute";
import { useAuth0 } from './contexts/auth0-context';

function App(): JSX.Element {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
    <Navbar />
      <div className={'container'}>
        <Router history={history}>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/post/:postId"} exact component={Post}/>
          <Route path={"/edit/:postId"} exact component={Edit}/>
          <Route path={"/create"} exact component={Create} />
          {/* <Route path={"/account/onboarding"} exact component={Onboarding} /> */}
          <PrivateRoute 
              exact
              path={"/account/onboarding"}
              isAuthenticated={isAuthenticated}
              component={Onboarding}
          />
        </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;