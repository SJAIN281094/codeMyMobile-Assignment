import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/organism/Snackbar';

// ******************** Pages ********************
import ErrorBoundary from './components/ErrorBoundary.jsx';
import screen from './utils/screen.js';
import Users from './pages/Users';
import Friends from './pages/Friends';

// ******************** Style ********************
import './App.css';

const App = () => {
  return (
    <ErrorBoundary>
      <Alert />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            key="users"
            render={(props) => screen('Users', <Users props={props} />)}
          />
          <Route
            exact
            path="/friends"
            key="friends"
            render={(props) => screen('Friends', <Friends props={props} />)}
          />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
