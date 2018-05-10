import { Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './home/home_page_container';
// import ProtectedRouter from './protected_router';



const App = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);
// <AuthRoute exact path="/" component={HomePageContainer} />
// <ProtectedRoute path="/" component={ProtectedRouter} />

export default App;
