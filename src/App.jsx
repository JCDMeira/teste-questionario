import React from 'react';
import { GlobalStyled } from './assets/styles/Global';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
