const { ApolloServer, gql } = require("apollo-server-lambda");
import typeDefs from "./domain/Query/books.query";
import resolvers from "./domain/Resolvers/books.resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

exports.handler = server.createHandler();