import { Flex } from '@chakra-ui/react'

function Container({ children, my = '0' }) {
  return (
    <Flex
      maxW="1000px"
      outline="1px solid black"
      px="4"
      my={my}
      direction="column"
    >
      {children}
    </Flex>
  )
}

export default Container
