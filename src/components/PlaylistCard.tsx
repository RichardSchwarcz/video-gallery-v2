import { Box, Flex } from '@chakra-ui/react'

function PlaylistCard({ playlist }) {
  return (
    <>
      <Flex
        w="235px"
        h="235px"
        rounded="lg"
        direction="column"
        boxShadow="lg"
        bgAttachment="fixed"
      >
        <Flex
          h="132.2px"
          w="235px"
          borderBottom="1px solid black"
          justifyContent="center"
          alignItems="center"
          fontSize="lg"
          fontWeight="bold"
        >
          {`playlist ${playlist.id}`}
        </Flex>
      </Flex>
    </>
  )
}

export default PlaylistCard
