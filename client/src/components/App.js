import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Stella from './Stella';
import Profile from './Profile';
import StoryNew from './StoryNew';
import { AppBackground } from './StyledComp';

class App extends Component {
  render() {
    return (
      <AppBackground>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/stella' component={Stella} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <ProtectedRoute exact path='/story_new' component={StoryNew} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </AppBackground>
    );
  }
}

export default App;
