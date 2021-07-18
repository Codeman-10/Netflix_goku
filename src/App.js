import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from './Components/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {user ? 
          <LoginScreen />
        :
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
