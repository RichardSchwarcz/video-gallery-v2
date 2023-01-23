import { Flex } from '@chakra-ui/react'

function VideoCard() {
  return (
    <Flex
      w="235px"
      h="200px"
      rounded="lg"
      direction="column"
      boxShadow="lg"
      bgGradient="linear(to-tr, gray.300,yellow.400, pink.400)"
      bgAttachment="fixed"
    />
  )
}

export default VideoCard
