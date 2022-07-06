const { gql } = require('apollo-server-express');

// this defs will make the decision of what data would be send back form the database
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  motoSchema: [Motocycle]
}

type Motocycle {
  motoId: ID!
  name: String
  motoType: String
  price: String
  image: String
  link: String
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
  users: [User]
  moto: [Motocycle]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  removeUser(_id: ID!): User
  login(email: String!, password: String!): Auth
  //singleMoto()
  addReview(motoId: ID!, reviewBody: String!): Motocycle
}`;


module.exports = typeDefs;
