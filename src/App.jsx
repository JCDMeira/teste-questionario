import React from 'react';
import { GlobalStyled } from './assets/styles/Global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Card from './Pages/Card';

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/card" exact component={Card} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
