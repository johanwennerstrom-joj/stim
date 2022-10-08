import { Box } from '@chakra-ui/react'
import { updateDescription } from '../../utils/fetchers'

const GalleryImage = ({ data }: any) => {
  const handleDelete = async () => {}
  const handleUpdate = async () => {
    await updateDescription(data.id, data.img)
  }

  return <Box>tja</Box>
}

export default GalleryImage
