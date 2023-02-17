import { Flex } from '@chakra-ui/react'

type ContainerProps = {
  children: React.ReactNode
  my?: string
}

function Container({ children, my = '0' }: ContainerProps) {
  return (
    <Flex
      maxW="1000px"
      w="1000px"
      my={my}
      // outline="1px solid black"
      direction="column"
    >
      {children}
    </Flex>
  )
}

export default Container
