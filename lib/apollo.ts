import { ApolloClient, InMemoryCache } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities';

const apolloClient = new ApolloClient({
  uri: process.env.NODE_ENV === 'development'
    ?'http://localhost:3000/api/graphql'
    :'https://custom-links.vercel.app/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          links: relayStylePagination(),
        },
      },
    },
  }),
});

export default apolloClient
