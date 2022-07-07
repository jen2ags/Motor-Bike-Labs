
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

