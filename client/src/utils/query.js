
import { gql } from '@apollo/client';

export const USER = gql`
  {
    user {
      _id
      username
      email
      motorSchema {
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