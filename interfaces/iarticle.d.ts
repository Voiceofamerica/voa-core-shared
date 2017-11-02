import { ContentType } from './icontenttype'

export enum ArticleVideoRelationship {
  SameItem = 0,
  MainImage = 1,
  EmbededInContent = 2
}

export interface IArticle {
  article: {
    id: number
    site: number
    zone: number
    /** a-article, v-video or p-photogallery */
    type: ContentType
    pubDate: Date
    lastUpdated: Date
    url: URL
    /** Short alternative of the article url. Can be used for Twitter like web site on so on. */
    twitter: URL
    title: string
    introduction: string
    content: string
    /** author array */
    authors: {
      name: {
        first: string
        middle: string
        last: string
      }
      email: string
      description: string
      id: number
    }[]
    image: {
      imageTitle: string
      id: number
      type: ContentType
      url: URL
    }
    audio: {
      audioTitle: string
      audioDescription: string
      id: number
      /** seconds */
      duration: number
      /** audio/mp3 */
      mime: MimeType
      url: string
      date: string
    }
    video: {
      videoDescription: string
      guid: string
      /** Defines relation between article and video => 0=SameItem, 1=MainImage,2=EmbededInContent */
      relType: ArticleVideoRelationship
      id: number
      width: number
      height: number
      /** seconds */
      duration: number
      url: URL
      thumbnail: URL
    }
    /** story array */
    relatedStories: {
      storyTitle: string
      id: number
      pubDate: Date
      /** a-article, v-video or p-photogallery */
      type: ContentType
      url: URL
      /** Short alternative of the article url. Can be used for Twitter like web site on so on. */
      twitter: URL
      thumbnailUrl: URL
    }[]
  }
}