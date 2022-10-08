import { ReactNode } from 'react'
import { VeryBasic } from 'unsplash-js/dist/methods/photos/types'

export interface Wrapper {
  children: ReactNode | ReactNode[]
}

export interface PayLoad {
  img: VeryBasic
  description: string
}
