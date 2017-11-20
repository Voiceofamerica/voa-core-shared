import gql from 'graphql-tag'

export const articleSchema = gql`
scalar Date
scalar URL

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
  first: String
  middle: String
  last: String
}

type Author {
  name: Name
  email: String
  description: String
  id: Int
}

type Image {
  imageTitle: String
  id: Int
  type: [ContentType]
  url: URL
}

type Audio {
  audioTitle: String
  audioDescription: String
  id: Int
  duration: Int
  mime: String
  url: URL
  date: Date
}

type Video {
    videoDescription: String
    guid: String
    relType: ArticleVideoRelationship
    id: Int
    width: Int
    height: Int
    duration: Int
    url: URL
    thumbnail: URL
}

type RelatedStory {
    storyTitle: String
    id: Int
    pubDate: Date
    type: [ContentType]
    url: String
    twitter: URL
    thumbnailUrl: URL
}

type Article {
  id: Int
  site: Int
  zone: Int
  type: [ContentType]
  pubDate: Date
  lastUpdated: Date
  url: URL
  twitter: URL
  title: String
  introduction: String
  content: String
  authors: [Author]
  image: Image
  audio: Audio
  video: Video
  relatedStories: [RelatedStory]
}


type Query {
  articles(source: Audience): [Article]
}
`
