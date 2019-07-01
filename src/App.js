import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from 'react-apollo'
import apolloClient from './services/apollo'
import Repositorios from './components/Repositorios'

function App() {
  return (
    
    <ApolloProvider client={apolloClient}>
      <Repositorios number_of_repos={50} user="luizbaldi">
        
      </Repositorios>
    </ApolloProvider>
  );
}

export default App;
