
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
      image
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
        image
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
      image
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
      image
    } 
  }
`;