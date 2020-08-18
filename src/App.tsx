import React from 'react';
import './App.scss';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Score from './scenes/Score';
import Game from './scenes/Game';
import Login from './scenes/Login';

const client = new ApolloClient({
  uri: 'https://hiring-backend-2048.herokuapp.com/admin/api',
  cache: new InMemoryCache(),
});

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/">
          <Score />
        </Route>
      </Switch>
    </ApolloProvider>
  </Router>
);

export default App;
