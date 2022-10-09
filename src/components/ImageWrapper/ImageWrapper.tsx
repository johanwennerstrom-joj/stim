import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useSWRConfig } from 'swr'
import { VeryBasic } from 'unsplash-js/dist/methods/photos/types'
import { Plus } from '../../ui/Icons'
import { postNew } from '../../utils/fetchers'
import { UnsplashPhoto } from '../../utils/interfaces'
import Image from '../Image/Image'

const ImageWrapper = ({
  img,
  callback,
}: {
  img: UnsplashPhoto
  callback: (id: string) => void
}) => {
  const [description, setDescription] = useState('')

  const { mutate } = useSWRConfig()
  const handleClick = async () => {
    await postNew({ img: img, description: description })
    mutate('/all')
    callback(img.id)
  }

  return (
    <Box>
      <Box
        position='relative'
        sx={{
          paddingBottom: '56.25%',
        }}
      >
        <Image
          alt=''
          height={153}
          width={272}
          src={img.urls.small}
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
      <Box
        pt='10px'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        gap='5px'
        cursor='pointer'
      >
        <Plus click={handleClick} />
        <Input
          placeholder='beskrivning'
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
    </Box>
  )
}

export default ImageWrapper
