import React, { useEffect } from 'react';
import { GlobalStyled } from './assets/styles/Global';
import { api } from './services/api';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  useEffect(() => {
    api.get('/api.php?amount=1').then((response) => {
      console.log(response.data.results);
    });
  }, []);

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
