import { ContentType } from './icontenttype'

export interface IZone {
  id: number
  site: number
  /* Date and time of last zone content modification */
  hash: Date
  /* If zone is article zone or zone for gallery or video (values are a,v,p or its combinations) */
  type: ContentType
  /* If zone is Broadcast zone */
  broadcast: boolean
  name: string
}
