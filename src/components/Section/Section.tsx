import { Box } from '@chakra-ui/react'
import { Wrapper } from '../../utils/interfaces'

const Section = ({ children }: Wrapper) => {
  return (
    <Box as='section' py='10'>
      {children}
    </Box>
  )
}

export default Section
