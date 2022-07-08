const { AuthenticationError } = require('apollo-server-express');
const { User, Motorcycle } = require('../models/index');
const { signToken } = require('../utils/auth');

// Resolvers do work in a similar fashion to how a controller file works 
const resolvers = {
  // a query can only retrieve data from the database
  Query: {
    // Get a single user, using the context as a param, 
    // Here we are addiing the token to check for a single user, with this we can see what user is logged in 
    sigleUser: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    
    // get all users, this can be a good use for the admin to see how many users are in there 
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    
    motorcycle: async (parent, args, context) => {
      if (context.user) {
        return Motorcycle.find()
          .select('-__v -password')
        }
        throw new AuthenticationError('Not logged in');
    },

    // get a single motorcycle by id 
    sigleMotorcycle: async (parent, { _id }) => {
      return Motorcycle.findOne({ _id });
    },
  },

  

  Mutation: {
    // addUser mutation, that will create a new user and return the user data and the token at the same time
    addUser: async (parent, args) => {
      const  user = await User.create(args);
      // take the whole user data object and the secret then encode it using the signToken function, then save it in a variable called token.
      const token = signToken(user);

      console.log(token)
      // return the token and the user data. 
      return { token, user}
    },


    addMotorcycles: async (parent, args) => {
      const  motorcycles = await Motorcycle.create({args});
      
      return { motorcycles }
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

      const token = signToken(user )

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
    addReview: async (parent, { motorcycleId, reviewBody }, context) => {
      if (context.user) {
        const updateMotorcycle = await Motorcycle.findOneAndUpdate(
          { _id: motorcycleId },
          { $push: {reviews: {reviewBody, username: context.user.username }}},
          { new: true, runValidators: true }
        );

        return updateMotorcycle;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;