"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.schema = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nenum Audience {\n  en\n  enus\n  fa\n  ko\n  ur\n  prs\n  pus\n  vi\n  zhcn\n  zhtw\n}\n\nenum ContentType {\n  Article\n  Video\n  PhotoGallery\n  Clip\n}\n\nenum ArticleVideoRelationship {\n  SameItem\n  MainImage\n  EmbededInContent\n}\n\ntype Photo {\n  id: Int\n  order: Int\n  url: String!\n  photoTitle: String\n  photoDescription: String\n  tiny: String!\n  thumb: String!\n  hero: String!\n}\n\ntype PhotoGallery {\n  id: Int!\n  relType: ArticleVideoRelationship\n  photoGalleryTitle: String\n  photoGalleryDescription: String\n  photo: [Photo]\n}\n\ntype Name {\n  first: String!\n  middle: String\n  last: String\n}\n\ntype Author {\n  name: Name!\n  email: String\n  description: String\n  id: Int!\n}\n\ntype Image {\n  imageTitle: String\n  id: Int!\n  type: String\n  url: String!\n  tiny: String!\n  thumb: String!\n  hero: String!\n}\n\ntype Audio {\n  audioTitle: String\n  audioDescription: String\n  id: Int!\n  duration: Int\n  mime: String\n  url: String\n  date: String\n}\n\ntype Video {\n  videoTitle: String\n  videoDescription: String\n  guid: String\n  relType: ArticleVideoRelationship\n  id: Int!\n  width: Int\n  height: Int\n  duration: Int\n  url: String\n  thumbnail: String\n  thumbnailTiny: String\n  thumbnailThumb: String\n  thumbnailHero: String\n}\n\ntype RelatedStory {\n  storyTitle: String!\n  id: Int!\n  pubDate: String!\n  type: ContentType\n  url: String\n  twitter: String\n  thumbnailUrl: String\n  thumbnailTiny: String\n  thumbnailThumb: String\n  thumbnailHero: String\n}\n\ntype Article {\n  id: Int!\n  site: Int\n  zone: Int\n  type: ContentType\n  pubDate: String!\n  lastUpdated: String\n  url: String\n  twitter: String\n  title: String!\n  introduction: String!\n  content: String\n  authors: [Author]\n  image: Image\n  audio: Audio\n  video: Video\n  relatedStories: [RelatedStory]\n  photoGallery: [PhotoGallery]\n  photo: Photo\n}\n\ntype Zone {\n  id: Int!\n  site: Int\n  hash: String\n  type: [ContentType]\n  broadcast: Boolean\n  name: String!\n}\n\nenum ProgramType {\n  Clip\n  Feature\n  BroadcastProgram\n  Video\n}\n\ntype Program {\n  id: Int!\n  duration: Int\n  type: ProgramType\n  url: String\n  date: String\n  dateLocal: String\n  timeLeft: Int\n  zone: Int\n  programTitle: String\n  programDescription: String\n  image: Image\n  liveStatus: Boolean\n}\n\ntype Query {\n  content(\n    source: Audience!\n    type: [ContentType!]!\n    id: Int\n    zoneId: Int\n    count: Int = 30\n    topNews: Boolean = false\n  ): [Article]\n  search(source: Audience!, keywords: String!, zoneId: Int): [Article]\n  breakingNews(source: Audience!): [Article]\n  program(source: Audience!, type: [ProgramType!]!, zoneId: Int): [Program]\n  audioProgram(source: Audience!, zoneId: Int): [Program]\n  zones(source: Audience!): [Zone]\n}\n"], ["\nenum Audience {\n  en\n  enus\n  fa\n  ko\n  ur\n  prs\n  pus\n  vi\n  zhcn\n  zhtw\n}\n\nenum ContentType {\n  Article\n  Video\n  PhotoGallery\n  Clip\n}\n\nenum ArticleVideoRelationship {\n  SameItem\n  MainImage\n  EmbededInContent\n}\n\ntype Photo {\n  id: Int\n  order: Int\n  url: String!\n  photoTitle: String\n  photoDescription: String\n  tiny: String!\n  thumb: String!\n  hero: String!\n}\n\ntype PhotoGallery {\n  id: Int!\n  relType: ArticleVideoRelationship\n  photoGalleryTitle: String\n  photoGalleryDescription: String\n  photo: [Photo]\n}\n\ntype Name {\n  first: String!\n  middle: String\n  last: String\n}\n\ntype Author {\n  name: Name!\n  email: String\n  description: String\n  id: Int!\n}\n\ntype Image {\n  imageTitle: String\n  id: Int!\n  type: String\n  url: String!\n  tiny: String!\n  thumb: String!\n  hero: String!\n}\n\ntype Audio {\n  audioTitle: String\n  audioDescription: String\n  id: Int!\n  duration: Int\n  mime: String\n  url: String\n  date: String\n}\n\ntype Video {\n  videoTitle: String\n  videoDescription: String\n  guid: String\n  relType: ArticleVideoRelationship\n  id: Int!\n  width: Int\n  height: Int\n  duration: Int\n  url: String\n  thumbnail: String\n  thumbnailTiny: String\n  thumbnailThumb: String\n  thumbnailHero: String\n}\n\ntype RelatedStory {\n  storyTitle: String!\n  id: Int!\n  pubDate: String!\n  type: ContentType\n  url: String\n  twitter: String\n  thumbnailUrl: String\n  thumbnailTiny: String\n  thumbnailThumb: String\n  thumbnailHero: String\n}\n\ntype Article {\n  id: Int!\n  site: Int\n  zone: Int\n  type: ContentType\n  pubDate: String!\n  lastUpdated: String\n  url: String\n  twitter: String\n  title: String!\n  introduction: String!\n  content: String\n  authors: [Author]\n  image: Image\n  audio: Audio\n  video: Video\n  relatedStories: [RelatedStory]\n  photoGallery: [PhotoGallery]\n  photo: Photo\n}\n\ntype Zone {\n  id: Int!\n  site: Int\n  hash: String\n  type: [ContentType]\n  broadcast: Boolean\n  name: String!\n}\n\nenum ProgramType {\n  Clip\n  Feature\n  BroadcastProgram\n  Video\n}\n\ntype Program {\n  id: Int!\n  duration: Int\n  type: ProgramType\n  url: String\n  date: String\n  dateLocal: String\n  timeLeft: Int\n  zone: Int\n  programTitle: String\n  programDescription: String\n  image: Image\n  liveStatus: Boolean\n}\n\ntype Query {\n  content(\n    source: Audience!\n    type: [ContentType!]!\n    id: Int\n    zoneId: Int\n    count: Int = 30\n    topNews: Boolean = false\n  ): [Article]\n  search(source: Audience!, keywords: String!, zoneId: Int): [Article]\n  breakingNews(source: Audience!): [Article]\n  program(source: Audience!, type: [ProgramType!]!, zoneId: Int): [Program]\n  audioProgram(source: Audience!, zoneId: Int): [Program]\n  zones(source: Audience!): [Zone]\n}\n"])));
var templateObject_1;
//# sourceMappingURL=schema.js.map