import { Box, Heading } from '@chakra-ui/react'

const Intro = () => {
  return (
    <Box display='flex' flexDir='column'>
      <Heading as='h1' size='xl'>
        Rösta på en bild eller föreslå en ny bild
      </Heading>
    </Box>
  )
}

export default Intro
