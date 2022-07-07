
import { gql } from '@apollo/client';

export const SINGLE_USER  = gql`
{
  sigleUser{
    _id
    username
    email
    motorSchema {
      _id
      image
      price
      motoType
      name
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
        image
        price
        motoType
        name
      }
    }
  }
`;

export const SINGLE_MOTORCYCLE = gql`
  query($id: ID!){
    sigleMotorcycle(_id: $id) {
      _id
      name
      motoType
      image
      price
    }
  }
`;


export const MOTOCYCLE = gql`
  query{
    motorcycle {
      _id
      image
      image
      price
      motoType
    } 
  }
`;