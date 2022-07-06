
const { AuthenticationError } = require('apollo-server-express');
const { User, Motocycle } = require('../models/index')
const { signToken } = require('../utils/auth');

// Resolvers do work in a similar fashion to how a controller file works 
const resolvers = {

  // a query can only retrieve data from the database
  Query: {
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    
    moto: async () => {
      return Motocycle.find()
        .select('-__v -password')
    }
  },

  Mutation: {
    // addUser mutation, that will create a new user and return the user data and the token at the same time
    addUser: async (parent, args) => {
      const  user = await User.create(args);
      // take the whole user data object and the secret then encode it using the signToken function, then save it in a variable called token.
      const token = signToken(user);

      // return the token and the user data. 
      return { token, user}
    },


    login: async (parent, { email , password }) => {
      // check on the User table for any matching email 
      const user = await User.findOne({ email });
      console.log(email);
      // if didn't find a matching email, then throw an erro incorrect email
      if(!user){
        throw new AuthenticationError('No user found whith this email');
      }

      // if email is available then  check on the User table for any matching password. befor matching the password, that
      // password will go thru a function called isCorrectPassword to hash it befor it will make it to the database, with that we
      // can compare it.  
      const correctPw = await user.isCorrectPassword(password);
       // if didn't find a matching email, then throw an erro incorrect email
      if(!correctPw){
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user)

      return {token, user};
    },

    // remove a sigle user (We can set this mutation to be called only if the user is an admin!!)
    removeUser: async (parent, { _id }) => {
      const updatedUser = await User.findOneAndDelete(
        { _id }
      );
      return updatedUser;
    },

    // addReview: async (parent, { _})
  }
};

module.exports = resolvers;