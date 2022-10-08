import axios from 'axios'
import { createApi } from 'unsplash-js'

import { BASE_URL } from './consts'

export const unsplashClient = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_KEY,
})
