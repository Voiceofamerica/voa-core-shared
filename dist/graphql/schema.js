"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.schema = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nenum Audience {\n  en\n  zh\n  fa\n}\n\nenum ContentType {\n  Audio\n  Video\n  PhotoGallery\n}\n\nenum ArticleVideoRelationship {\n  SameItem\n  MainImage\n  EmbededInContent\n}\n\ntype Name {\n  first: String!\n  middle: String\n  last: String\n}\n\ntype Author {\n  name: Name!\n  email: String\n  description: String\n  id: Int!\n}\n\ntype Image {\n  imageTitle: String\n  id: Int!\n  type: [ContentType]\n  url: String!\n}\n\ntype Audio {\n  audioTitle: String!\n  audioDescription: String\n  id: Int!\n  duration: Int\n  mime: String\n  url: String\n  date: String\n}\n\ntype Video {\n  videoDescription: String\n  guid: String\n  relType: ArticleVideoRelationship\n  id: Int!\n  width: Int\n  height: Int\n  duration: Int\n  url: String\n  thumbnail: String\n}\n\ntype RelatedStory {\n  storyTitle: String!\n  id: Int!\n  pubDate: String!\n  type: [ContentType]\n  url: String\n  twitter: String\n  thumbnailUrl: String\n}\n\ntype Article {\n  id: Int!\n  site: Int\n  zone: Int\n  type: [ContentType]\n  pubDate: String!\n  lastUpdated: String\n  url: String\n  twitter: String\n  title: String!\n  introduction: String!\n  content: String!\n  authors: [Author]\n  image: Image\n  audio: Audio\n  video: Video\n  relatedStories: [RelatedStory]\n}\n\ntype Zone {\n  id: Int!\n  site: Int\n  hash: String\n  type: [ContentType]\n  broadcast: Boolean\n  name: String!\n}\n\ntype Query {\n  articles(source: Audience): [Article]\n  articleById(source: Audience, id: Int): Article\n  articlesByZoneId(souce: Audience, zoneId: Int): [Article]\n  search(source: Audience, keywords: String, zoneId: Int = 0): [Article]\n  breakingNews(source: Audience): [Article]\n  zones(source: Audience): [Zone]\n}\n"], ["\nenum Audience {\n  en\n  zh\n  fa\n}\n\nenum ContentType {\n  Audio\n  Video\n  PhotoGallery\n}\n\nenum ArticleVideoRelationship {\n  SameItem\n  MainImage\n  EmbededInContent\n}\n\ntype Name {\n  first: String!\n  middle: String\n  last: String\n}\n\ntype Author {\n  name: Name!\n  email: String\n  description: String\n  id: Int!\n}\n\ntype Image {\n  imageTitle: String\n  id: Int!\n  type: [ContentType]\n  url: String!\n}\n\ntype Audio {\n  audioTitle: String!\n  audioDescription: String\n  id: Int!\n  duration: Int\n  mime: String\n  url: String\n  date: String\n}\n\ntype Video {\n  videoDescription: String\n  guid: String\n  relType: ArticleVideoRelationship\n  id: Int!\n  width: Int\n  height: Int\n  duration: Int\n  url: String\n  thumbnail: String\n}\n\ntype RelatedStory {\n  storyTitle: String!\n  id: Int!\n  pubDate: String!\n  type: [ContentType]\n  url: String\n  twitter: String\n  thumbnailUrl: String\n}\n\ntype Article {\n  id: Int!\n  site: Int\n  zone: Int\n  type: [ContentType]\n  pubDate: String!\n  lastUpdated: String\n  url: String\n  twitter: String\n  title: String!\n  introduction: String!\n  content: String!\n  authors: [Author]\n  image: Image\n  audio: Audio\n  video: Video\n  relatedStories: [RelatedStory]\n}\n\ntype Zone {\n  id: Int!\n  site: Int\n  hash: String\n  type: [ContentType]\n  broadcast: Boolean\n  name: String!\n}\n\ntype Query {\n  articles(source: Audience): [Article]\n  articleById(source: Audience, id: Int): Article\n  articlesByZoneId(souce: Audience, zoneId: Int): [Article]\n  search(source: Audience, keywords: String, zoneId: Int = 0): [Article]\n  breakingNews(source: Audience): [Article]\n  zones(source: Audience): [Zone]\n}\n"])));
var templateObject_1;
//# sourceMappingURL=schema.js.map