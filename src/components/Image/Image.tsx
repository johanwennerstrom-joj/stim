import { CSSProperties } from 'react'

const LoadingOptions = ['lazy', 'eager', undefined] as const

interface ImageProps {
  src: string
  alt: string
  height: number
  width: number
  loading?: typeof LoadingOptions[number]
  style: CSSProperties
}

const Image = ({
  src,
  alt,
  height,
  width,
  loading = 'lazy',
  style,
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      loading={loading}
      style={style}
      decoding='async'
    />
  )
}

export default Image
