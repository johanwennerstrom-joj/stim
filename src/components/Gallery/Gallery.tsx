import { Box, Grid, Spinner, Text } from '@chakra-ui/react'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
import useSWR from 'swr'
import { getGallery } from '../../utils/fetchers'

const Gallery = () => {
  return <p>tja</p>
  //   const { data, error } = useSWR('/all', getGallery, {
  //     revalidateOnFocus: false,
  //   })

  //   if (!data) return <Spinner size='xl' />
  //   if (error) return <Text>Något gick fel...</Text>
  //   console.log(data)
  //   if (data && !error) {
  //     return (
  //       <Grid templateColumns='repeat(3, 1fr)' w='50%' gap={6}>
  //         {data?.map((img) => (
  //           <Box key={img.id}>
  //             <img src={img.data.src} />
  //             <p>{img.data.description}</p>
  //           </Box>
  //         ))}
  //       </Grid>
  //     )
  //   } else return null
}

export default Gallery
