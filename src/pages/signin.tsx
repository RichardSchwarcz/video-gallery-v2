import { FcGoogle } from 'react-icons/fc'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { getSession, signIn } from 'next-auth/react'

function SignIn() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Heading fontSize="4xl">Sign in to your account</Heading>

        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
                <Link color="blue.400">Forgot password?</Link>
              </Stack>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>

          <Text my="4" textAlign="center" color="gray.500">
            OR CONTINUE WITH
          </Text>
          <Button
            leftIcon={<FcGoogle />}
            w="full"
            onClick={() =>
              signIn('google', { callbackUrl: 'http://localhost:3000/videos' })
            }
          >
            Google
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: '/videos',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

export default SignIn
