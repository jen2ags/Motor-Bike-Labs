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
  condition: String
  primaryColor: String
  category: String
  type: String
  location: String
  stockNum: String
  image: String
}

type Review {
  _id: ID
  reviewBody: String
  username: String
  createdAt: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  sigleUser: User
  users: [User]
  motorcycle: [Motorcycle]
  sigleMotorcycle(_id: ID!): Motorcycle
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  removeUser(_id: ID!): User
  login(email: String!, password: String!): Auth
  addReview(_id: ID!, reviewBody: String!): Motorcycle
  addMotorcycles(_id: ID, make: String, model: String, year: String, mileage: String, price: String, condition: String, primaryColor: String, category: String, type: String, location: String, stockNum: String, image: String ) : Motorcycle
}`;


module.exports = typeDefs;
