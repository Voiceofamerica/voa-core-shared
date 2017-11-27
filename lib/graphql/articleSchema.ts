import gql from 'graphql-tag'

export const articleSchema = gql`
enum Audience {
  en
  zh
  fa
}

enum ContentType {
  Audio
  Video
  PhotoGallery
}

enum ArticleVideoRelationship {
  SameItem
  MainImage
  EmbededInContent
}

type Name {
  first: String!
  middle: String
  last: String
}

type Author {
  name: Name!
  email: String
  description: String
  id: Int!
}

type Image {
  imageTitle: String
  id: Int!
  type: [ContentType]
  url: String!
}

type Audio {
  audioTitle: String!
  audioDescription: String
  id: Int!
  duration: Int
  mime: String
  url: String
  date: String
}

type Video {
    videoDescription: String
    guid: String
    relType: ArticleVideoRelationship
    id: Int!
    width: Int
    height: Int
    duration: Int
    url: String
    thumbnail: String
}

type RelatedStory {
    storyTitle: String!
    id: Int!
    pubDate: String!
    type: [ContentType]
    url: String
    twitter: String
    thumbnailUrl: String
}

type Article {
  id: Int!
  site: Int
  zone: Int
  type: [ContentType]
  pubDate: String!
  lastUpdated: String
  url: String
  twitter: String
  title: String!
  introduction: String!
  content: String!
  authors: [Author]
  image: Image
  audio: Audio
  video: Video
  relatedStories: [RelatedStory]
}

type Query {
  articles(source: Audience): [Article]
  articleById(source: Audience, id: Int): Article
}
`
