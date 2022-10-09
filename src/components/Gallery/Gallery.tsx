import { Box, Grid, Heading, Spinner, Text } from '@chakra-ui/react'

import useSWR from 'swr'
import { getGallery } from '../../utils/fetchers'
import GalleryImage from '../GalleryImage/GalleryImage'

const Gallery = () => {
  const { data, error } = useSWR('/all', getGallery, {
    revalidateOnFocus: false,
  })

  if (!data) return <Spinner size='xl' />
  if (error) return <Text>Något gick fel...</Text>

  return (
    <Box
      gridColumn={{
        md: 'span 2',
      }}
      w='100%'
    >
      <Heading fontFamily='monospace'>Ditt galleri</Heading>
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(3, 1fr)',
        }}
        w='100%'
        py='10'
        gap={6}
      >
        {data?.map((i) => (
          <GalleryImage key={i._id} item={i} />
        ))}
      </Grid>
    </Box>
  )
}

export default Gallery
