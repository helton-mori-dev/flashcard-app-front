import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { provideApolloClient } from '@vue/apollo-composable'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const app = createApp({
  setup() {
    provideApolloClient(apolloClient)
    return () => h(App)
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
