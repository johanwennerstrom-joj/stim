import {
  Container,
  Grid,
  Text,
  Spinner,
  Heading,
  Button,
} from '@chakra-ui/react'
import useSWR, { useSWRConfig } from 'swr'
import { getPhotosRandom } from '../../utils/fetchers'
import Gallery from '../Gallery/Gallery'
import ImageWrapper from '../ImageWrapper/ImageWrapper'

const PhotoGrid = () => {
  const { data, error } = useSWR('/photos', getPhotosRandom, {
    revalidateOnFocus: false,
  })
  const { mutate } = useSWRConfig()

  if (error) return null
  if (!data) return <Spinner size='xl' />

  return (
    <Container maxW='none' display='flex' py='10'>
      <Grid templateColumns='repeat(3, 1fr)' w='50%' gap={6}>
        {data?.response?.map((img) => (
          <ImageWrapper img={img} key={img.id} />
        ))}
        <Button alignSelf='end' onClick={() => mutate('/photos')}>
          Nya bilder
        </Button>
      </Grid>
      <Gallery />
    </Container>
  )
}

export default PhotoGrid
