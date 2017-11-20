import gql from 'graphql-tag'

export const voaSchema = gql`
  type Query {
    hello: String
  }
`
