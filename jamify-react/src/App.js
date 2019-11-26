import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AppLayout from './containers/AppLayout/AppLayout.jsx';
import Profile from './containers/Profile/Profile.jsx';

function App() {
  return (
    <AppLayout>
        <Switch>
          <Route exact path="/" render={(props) => <Profile {...props} />}/>
          <Route path="/user/:userid" />
          <Route path="/artist/:artistid" />
        </Switch>
    </AppLayout>
  );
}

export default App;
