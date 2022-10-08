import axios, { AxiosResponse } from 'axios'
import { ApiResponse } from 'unsplash-js/dist/helpers/response'
import { Random } from 'unsplash-js/dist/methods/photos/types'
import { Basic } from 'unsplash-js/dist/methods/users/types'
import { BASE_URL } from './consts'
import { unsplashClient } from './generalUtils'
import { PayLoad } from './interfaces'

export const getGallery = async () => {
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

export const getPhotosRandom = async () => {
  const res = await unsplashClient.photos.getRandom({ count: 10 })
  return res
}

export const updateDescription = async (id: string, payload: PayLoad) => {
  const res = await axios.put(`${BASE_URL}/gallery/${id}`, {
    data: {
      data: payload,
    },
  })
  return res
}

export const deleteGalleryItem = async (id: string) => {
  const res = await axios.delete(`${BASE_URL}/gallery/${id}`)
  return res
}
