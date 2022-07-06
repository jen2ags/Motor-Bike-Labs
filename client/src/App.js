import React from 'react';
// get access to server api
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// use router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// retrieve token from local storage 
import { setContext } from '@apollo/client/link/context';

// components export
import SignUp  from './pages/SignUp';
import Home from './Components/Home'


function App() {
  return (

    <ApolloProvider client={client}> 
      <Router>
          <div>
            <Routes>
              <Route path="/" element={<SignUp  />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
      </Router>
    </ApolloProvider>
  );
}

// set httpLink to get the data 
const httpLink = createHttpLink({
  uri: '/graphql',  // uri stands for Uniform Resource Identifier
});

// set the authLink to get the token from localStorage
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// instruct the Apollo instance in App.js to retrieve this token every time we make a GraphQL request,
// this will return the token everytime we make a request to the DB
const client = new ApolloClient({ // create the connection from the client server to the api endpoint or graphql server that will give us the data
  // combine both authLink and httpLink 
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), // if he we get the data this will save it for next time 
});

export default App;
