
import { gql } from '@apollo/client';

export const SINGLE_USER  = gql`
{
  sigleUser{
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
        username
        reviewBody
      }
    }
  }
}
`;

export const USERS = gql`
  query{
    users{
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
<<<<<<< HEAD
        reviews {
          _id
          reviewBody
=======
        reviewSchema {
          _id  
>>>>>>> 46e166bcefc41a9e2f6e3cddf0f9fe7b93d0d215
        }
      }
    }
  }
`;

export const SINGLE_MOTORCYCLE = gql`
  query($id: ID!){
    sigleMotorcycle(_id: $id) {
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
`;


export const MOTORCYCLE = gql`
  query{
    motorcycle {
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
`;