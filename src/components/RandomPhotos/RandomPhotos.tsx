import {
  Container,
  Grid,
  Text,
  Spinner,
  Heading,
  Button,
  Box,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { getPhotosRandom } from '../../utils/fetchers'
import { UnsplashPhoto } from '../../utils/interfaces'
import ImageWrapper from '../ImageWrapper/ImageWrapper'

const RandomPhotos = () => {
  const [photos, setPhotos] = useState<UnsplashPhoto[] | [] | null>(null)

  const { data, error } = useSWR('/photos', getPhotosRandom, {
    revalidateOnFocus: false,
  })
  const { mutate } = useSWRConfig()

  useEffect(() => {
    if (data) {
      setPhotos(data)
    }
  }, [data])

  const removeSelected = (selected: string, arr: UnsplashPhoto[] | null) => {
    const update = arr?.filter((photo) => photo.id !== selected)

    if (update) {
      setPhotos(update)
    }
  }

  if (error) return null
  if (!data) return <Spinner size='xl' />
  return (
    <Container maxW='none'>
      <Heading fontFamily='monospace'>Välj bilder</Heading>
      <Box py='10'>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          height='fit-content'
          gap={6}
        >
          {photos?.map((img) => (
            <ImageWrapper
              img={img}
              key={img.id}
              callback={() => removeSelected(img.id, photos)}
            />
          ))}
          <Button alignSelf='end' onClick={() => mutate('/photos')}>
            Nya bilder
          </Button>
        </Grid>
      </Box>
    </Container>
  )
}

export default RandomPhotos
