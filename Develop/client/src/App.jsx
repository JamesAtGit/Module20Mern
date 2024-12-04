import React from 'react';
import { ApolloProvider, InMemoryCache } from '@apollo/client';
import SearchBooks from './components/SearchBooks';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <SearchBooks />
    </ApolloProvider>
  );
}

export default App;
