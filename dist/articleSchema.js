"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = require("graphql-tag");
exports.articleSchema = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nscalar Date\nscalar URL\n\nenum Audience {\n  en\n  zh\n  fa\n}\n\nenum ContentType {\n  Audio\n  Video\n  PhotoGallery\n}\n\nenum ArticleVideoRelationship {\n  SameItem\n  MainImage\n  EmbededInContent\n}\n\ntype Name {\n  first: String\n  middle: String\n  last: String\n}\n\ntype Author {\n  name: Name\n  email: String\n  description: String\n  id: Int\n}\n\ntype Image {\n  imageTitle: String\n  id: Int\n  type: [ContentType]\n  url: URL\n}\n\ntype Audio {\n  audioTitle: String\n  audioDescription: String\n  id: Int\n  duration: Int\n  mime: String\n  url: URL\n  date: Date\n}\n\ntype Video {\n    videoDescription: String\n    guid: String\n    relType: ArticleVideoRelationship\n    id: Int\n    width: Int\n    height: Int\n    duration: Int\n    url: URL\n    thumbnail: URL\n}\n\ntype RelatedStory {\n    storyTitle: String\n    id: Int\n    pubDate: Date\n    type: [ContentType]\n    url: String\n    twitter: URL\n    thumbnailUrl: URL\n}\n\ntype Article {\n  id: Int\n  site: Int\n  zone: Int\n  type: [ContentType]\n  pubDate: Date\n  lastUpdated: Date\n  url: URL\n  twitter: URL\n  title: String\n  introduction: String\n  content: String\n  authors: [Author]\n  image: Image\n  audio: Audio\n  video: Video\n  relatedStories: [RelatedStory]\n}\n\n\ntype Query {\n  articles(source: Audience): [Article]\n}\n"], ["\nscalar Date\nscalar URL\n\nenum Audience {\n  en\n  zh\n  fa\n}\n\nenum ContentType {\n  Audio\n  Video\n  PhotoGallery\n}\n\nenum ArticleVideoRelationship {\n  SameItem\n  MainImage\n  EmbededInContent\n}\n\ntype Name {\n  first: String\n  middle: String\n  last: String\n}\n\ntype Author {\n  name: Name\n  email: String\n  description: String\n  id: Int\n}\n\ntype Image {\n  imageTitle: String\n  id: Int\n  type: [ContentType]\n  url: URL\n}\n\ntype Audio {\n  audioTitle: String\n  audioDescription: String\n  id: Int\n  duration: Int\n  mime: String\n  url: URL\n  date: Date\n}\n\ntype Video {\n    videoDescription: String\n    guid: String\n    relType: ArticleVideoRelationship\n    id: Int\n    width: Int\n    height: Int\n    duration: Int\n    url: URL\n    thumbnail: URL\n}\n\ntype RelatedStory {\n    storyTitle: String\n    id: Int\n    pubDate: Date\n    type: [ContentType]\n    url: String\n    twitter: URL\n    thumbnailUrl: URL\n}\n\ntype Article {\n  id: Int\n  site: Int\n  zone: Int\n  type: [ContentType]\n  pubDate: Date\n  lastUpdated: Date\n  url: URL\n  twitter: URL\n  title: String\n  introduction: String\n  content: String\n  authors: [Author]\n  image: Image\n  audio: Audio\n  video: Video\n  relatedStories: [RelatedStory]\n}\n\n\ntype Query {\n  articles(source: Audience): [Article]\n}\n"])));
var templateObject_1;
//# sourceMappingURL=articleSchema.js.map