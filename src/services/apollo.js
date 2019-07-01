import { ApolloClient   } from 'apollo-client'
import { HttpLink       } from 'apollo-link-http'
import { InMemoryCache  } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context';


const httpLink = new HttpLink ({
    
    uri:"https://api.github.com/graphql"
    
})

const authLink = setContext((_, { headers }) => {
    let token = "803dcd9eeb5acf12c813ecd9ada7137a155382ed"
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
        authorization: token ? `token  ${token}` : "",
        }
    }
});

const client  =  new ApolloClient ({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})

export default client;