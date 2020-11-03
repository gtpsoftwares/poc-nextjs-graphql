import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from './contexts/auth0-context';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider,ApolloClient,gql,NormalizedCacheObject,InMemoryCache,HttpLink } from '@apollo/client';
  
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache() as any,
    link: new HttpLink({ uri: process.env.REACT_APP_GRAPHQLAPI_URL })
  });
  

ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth0Provider>
        <BrowserRouter>  
          <App />
        </BrowserRouter>
    </Auth0Provider>
  </ApolloProvider>,
document.getElementById('root')
);

// ...ApolloClient instantiated here...

client
  .query({
    query: gql`
      query {
        items {
            title
            price
            description
            id
        }
    }`
  })
  .then(result => console.log(result));
