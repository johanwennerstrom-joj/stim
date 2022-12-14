import { Box, Button, Fade, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useSWRConfig } from 'swr'
import { Cancel, Delete, Update } from '../../ui/Icons'
import { deleteGalleryItem, updateDescription } from '../../utils/fetchers'
import { GalleryResponse } from '../../utils/interfaces'
import DeleteButton from '../DeleteButton/DeleteButton'
import Image from '../Image/Image'

const GalleryImage = ({ item }: { item: GalleryResponse }) => {
  const [updateDesc, setUpdateDesc] = useState(item.data.description)
  const [updateMode, setUpdateMode] = useState(false)

  const { mutate } = useSWRConfig()

  const handleDelete = async () => {
    await deleteGalleryItem(item._id)
    mutate('/all')
  }
  const handleUpdate = async () => {
    await updateDescription(item._id, {
      img: item.data.img,
      description: updateDesc,
    })
    mutate('/all')
  }

  return (
    <Box>
      <Box
        position='relative'
        maxHeight='236px'
        sx={{
          paddingBottom: '56.25%',
          overflow: 'hidden',
        }}
      >
        <Image
          src={item.data.img.urls.small}
          alt=''
          height={153}
          width={272}
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
      <Text fontSize='2xl'>{item.data.description}</Text>

      <Box display='flex' justifyContent='space-between' pt='3'>
        {updateMode ? (
          <Box display='flex' flexDir='column' gap='3'>
            <Box display='flex' gap='3' alignItems='center'>
              <Input
                placeholder='Uppdatera beskrivning'
                value={updateDesc}
                borderColor='black'
                _placeholder={{
                  color: 'black',
                }}
                onChange={(e) => setUpdateDesc(e.target.value)}
              />
              <Cancel click={() => setUpdateMode(false)} />
            </Box>
            <Button onClick={handleUpdate}>Uppdatera beskrivning</Button>
          </Box>
        ) : (
          <Box
            willChange='transform'
            sx={{
              transition: 'ease 0.4s',
            }}
            _hover={{
              transform: 'rotate(45deg)',
            }}
          >
            <Update click={() => setUpdateMode(true)} />
          </Box>
        )}
        <DeleteButton handler={handleDelete} />
      </Box>
    </Box>
  )
}

export default GalleryImage
