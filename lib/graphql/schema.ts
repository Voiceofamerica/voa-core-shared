import gql from 'graphql-tag'
export const schema = gql`
enum Audience {
  am # Amharic
  bo # Tibetan
  en # European english (RFE/RL)
  enus # US English
  es # Spanish
  fa # Farsi
  ko # Korean
  om # Afaan Oromoo
  prs # Dari
  pus # Pashto
  ru # Russian
  tg # Tigrigna
  ur # Urdu
  vi # Vietnamese
  zhcn # Simplified Chinese
}

enum ContentType {
  Article
  Video
  PhotoGallery
  Clip
}

enum ArticleVideoRelationship {
  SameItem
  MainImage
  EmbededInContent
}

type Photo {
  id: Int
  order: Int
  url: String!
  photoTitle: String
  photoDescription: String
  tiny: String!
  thumb: String!
  hero: String!
}

type PhotoGallery {
  id: Int!
  relType: ArticleVideoRelationship
  photoGalleryTitle: String
  photoGalleryDescription: String
  photo: [Photo]
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
  type: String
  url: String!
  tiny: String!
  thumb: String!
  hero: String!
}

type Audio {
  audioTitle: String
  audioDescription: String
  id: Int!
  duration: Int
  mime: String
  url: String
  date: String
}

type Video {
  videoTitle: String
  videoDescription: String
  guid: String
  relType: ArticleVideoRelationship
  id: Int!
  width: Int
  height: Int
  duration: Int
  url: String
  thumbnail: String
  thumbnailTiny: String
  thumbnailThumb: String
  thumbnailHero: String
}

type RelatedStory {
  storyTitle: String!
  id: Int!
  pubDate: String!
  type: ContentType
  url: String
  twitter: String
  thumbnailUrl: String
  thumbnailTiny: String
  thumbnailThumb: String
  thumbnailHero: String
}

type Article {
  id: Int!
  site: Int
  zone: Int
  type: ContentType
  pubDate: String!
  lastUpdated: String
  url: String
  twitter: String
  title: String!
  introduction: String!
  content: String
  authors: [Author]
  image: Image
  audio: Audio
  video: Video
  relatedStories: [RelatedStory]
  photoGallery: [PhotoGallery]
  photo: Photo
}

type Zone {
  id: Int!
  site: Int
  hash: String
  type: [ContentType]
  broadcast: Boolean
  name: String!
}

enum ProgramType {
  Clip
  Feature
  BroadcastProgram
  Video
}

type Program {
  id: Int!
  duration: Int
  type: ProgramType
  url: String
  date: String
  dateLocal: String
  timeLeft: Int
  zone: Int
  programTitle: String
  programDescription: String
  image: Image
  liveStatus: Boolean
}

type Query {
  content(
    source: Audience!
    type: [ContentType!]!
    id: Int
    zoneId: Int
    count: Int = 30
    topNews: Boolean = false
  ): [Article]
  search(source: Audience!, keywords: String!, zoneId: Int): [Article]
  breakingNews(source: Audience!): [Article]
  program(source: Audience!, type: [ProgramType!]!, zoneId: Int): [Program]
  audioProgram(source: Audience!, zoneId: Int): [Program]
  zones(source: Audience!): [Zone]
}
`
