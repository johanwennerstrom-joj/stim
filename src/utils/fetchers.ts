import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from './consts'
import { GalleryResponse, PayLoad, UnsplashPhoto } from './interfaces'

export const getGallery = async (): Promise<GalleryResponse[]> => {
  const res = await axios.get(`${BASE_URL}/gallery`)

  return res.data
}

export const postNew = async (payload: PayLoad) => {
  try {
    const res = await axios.post(`${BASE_URL}/gallery`, {
      data: payload,
    })
    return res
  } catch (error) {
    console.error(error)
    return error
  }
}

export const getPhotosRandom = async (): Promise<UnsplashPhoto[]> => {
  const res = await axios.get(
    'https://api.unsplash.com/photos/random/?count=10',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
      },
    }
  )
  return res.data
}

export const updateDescription = async (id: string, item: PayLoad) => {
  const res = await axios.put(`${BASE_URL}/gallery/${id}`, {
    data: item,
  })
  return res
}

export const deleteGalleryItem = async (id: string) => {
  const res = await axios.delete(`${BASE_URL}/gallery/${id}`)
  return res
}
