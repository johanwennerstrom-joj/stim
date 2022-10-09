import { Box, Container } from '@chakra-ui/react'
import Gallery from './components/Gallery/Gallery'
import RandomPhotos from './components/RandomPhotos/RandomPhotos'

const App = () => {
  return (
    <Box as='main' fontFamily='monospace'>
      <Box as='section' py='10'>
        <Container maxW='none'>
          <Box
            display='grid'
            gridTemplateColumns={{
              base: '1fr 1fr',
              md: '1fr 1fr 1fr',
            }}
          >
            <RandomPhotos />
            <Gallery />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default App
