import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AppLayout from './containers/AppLayout/AppLayout.jsx';
import SigninLayout from './containers/SigninLayout/SigninLayout.jsx';
import Artist from './containers/Profile/Profile.jsx';
import Signin from './components/Signin/signin.jsx';

const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

function App() {
  return (
    <Switch>
      <AppRoute exact path="/" layout={SigninLayout} component={Signin}/>

      <AppRoute path="/home" layout={AppLayout} />
      <AppRoute path="/user/:userid" layout={AppLayout}  />
      <AppRoute path="/artist/:artistid" layout={AppLayout} component={Artist} />
      <AppLayout path="playlist/:playlistid" layout={AppLayout} />
    </Switch>
  );
}

export default App;
