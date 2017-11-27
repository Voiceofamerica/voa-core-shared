import gql from 'graphql-tag'

export const zoneSchema = gql`
  enum ContentType {
    Audio
    Video
    PhotoGallery
  }

  type Zone {
    id: Int!
    site: Int
    hash: String
    type: [ContentType]
    broadcast: Boolean
    name: String!
  }

  type Query {
    zones(source: Audience): [Zone]
  }
`
