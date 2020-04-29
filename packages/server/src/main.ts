import { ApolloGateway } from '@apollo/gateway'
import { ApolloServer } from 'apollo-server'

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => {
    // done
  })
}

const serviceList = [
  {},
]

const gateway = new ApolloGateway({ serviceList })
const server = new ApolloServer({ gateway })
server.listen()
