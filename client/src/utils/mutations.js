import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login( $email: String! $password: String!) {
    login(email: $email password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser( $username: String! $email: String! $password: String!) {
    addUser( username: $username email: $email password: $password) {
      token
      user {
        _id
        username
        email
        motorSchema {
          _id
          make
          model
          year
          mileage
          price
          condition
          primaryColor
          category
          type
          location
          stockNum
          image_1
          image_2
          image_3
          reviews {
            _id
            reviewBody
          }
        }
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($motorId: ID! , $reviewBody: String!) {
    addReview(motorId: $motorId, reviewBody: $reviewBody) {
      reviewSchema{
        reviewBody
        reviewBody
        createdAt
      }
    }
  }
`;