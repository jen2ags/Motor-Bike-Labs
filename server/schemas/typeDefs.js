const { gql } = require('apollo-server-express');

// this defs will make the decision of what data would be send back form the database
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  motorSchema: [Motorcycle]
}

type Motorcycle {
  _id: ID
  make: String
  model: String
  year: String
  mileage: String
  price: String
  image: String
  reviewSchema: [Review]
}

type Review {
  _id: ID
  reviewBody: String
  createdAt: String
  username: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  me: User
  users: [User]
  motorcycle: [Motorcycle]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  removeUser(_id: ID!): User
  login(email: String!, password: String!): Auth
  addReview(_id: ID!, reviewBody: String!): Motorcycle
}`;


module.exports = typeDefs;
