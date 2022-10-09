export interface PayLoad {
  img: UnsplashPhoto
  description: string
}

export interface GalleryResponse {
  _id: string
  data: PayLoad
}

export interface UnsplashPhoto {
  id: string
  width: number
  height: number
  urls: {
    small: string
  }
}
