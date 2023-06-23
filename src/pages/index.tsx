import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

function Home() {
  return (
    <Flex w="sm" direction="column" mx="auto" my="20">
      <Heading textAlign="center">Video Gallery</Heading>
      <Flex
        mx="auto"
        direction="column"
        w="sm"
        border="1px solid"
        p="4"
        borderColor="gray.300"
        borderRadius="lg"
        mt="10"
        gap="4"
      >
        <Text textAlign="center">Sign in to your account</Text>
        <Link href="/signin">
          <Button w="100%">Sign in</Button>
        </Link>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text textAlign="center">Don't have an account?</Text>
        <Button>Sign up</Button>
      </Flex>
    </Flex>
  )
}

export default Home
