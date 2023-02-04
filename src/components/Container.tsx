import { Flex } from '@chakra-ui/react'

function Container({ children, my = '0' }) {
  return (
    <Flex
      maxW="1000px"
      w="1000px"
      px="4"
      my={my}
      // outline="1px solid black"
      direction="column"
    >
      {children}
    </Flex>
  )
}

export default Container
