import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { provide } from 'vue'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

provide(DefaultApolloClient, apolloClient)
