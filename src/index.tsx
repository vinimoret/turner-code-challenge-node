import React from 'react';
import ReactDOM from 'react-dom';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, concat } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router-dom';
import AppRouter from './routes';

import './index.css';

const history = createBrowserHistory();

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem('token');
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  // tslint:disable-next-line:no-null-keyword
  return forward ? forward(operation) : null;
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) => {
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    authMiddleware,
    new HttpLink({
      uri: '/graphql',
      credentials: 'same-origin',
    }),
  ]),
  cache: new InMemoryCache(),
});

const WrappedApp = () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <AppRouter />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
