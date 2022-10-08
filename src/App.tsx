import { Box, Container } from '@chakra-ui/react'
import Intro from './components/Intro/Intro'
import PhotoGrid from './components/PhotoGrid/PhotoGrid'
import Section from './components/Section/Section'

const App = () => {
  return (
    <Box as='main'>
      <Section>
        <Container maxW='none'>
          <Intro />
          <PhotoGrid />
        </Container>
      </Section>
    </Box>
  )
}

export default App
