
import { gql } from '@apollo/client';

export const USER = gql`
  {
    user {
      _id
      username
      email
      motoSchema {
        _id
        name
        motoType
        price
        image
        link
      }
    }
  }
`;