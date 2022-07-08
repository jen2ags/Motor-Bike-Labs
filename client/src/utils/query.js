
import { gql } from '@apollo/client';

export const SINGLE_USER  = gql`
{
  sigleUser{
    _id
    username
    email
    motorSchema {
      _id: ID
      make: String
      model: String
      year: String
      mileage: String
      price: String
      image: String
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
        _id: ID
        make: String
        model: String
        year: String
        mileage: String
        price: String
        image: String
      }
    }
  }
`;

export const SINGLE_MOTORCYCLE = gql`
  query($id: ID!){
    sigleMotorcycle(_id: $id) {
      _id: ID
      make: String
      model: String
      year: String
      mileage: String
      price: String
      image: String
    }
  }
`;


export const MOTORCYCLE = gql`
  query{
    motorcycle {
      _id: ID
      make: String
      model: String
      year: String
      mileage: String
      price: String
      image: String
    } 
  }
`;