import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Container,
  Flex,
  HStack,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import Link from 'next/link'
import CreateOnButtonInput from './CreateOnButtonInput'
import MenuDrawer from './MenuDrawer'

function NavbarLayout() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex m="4">
      <MenuDrawer />
      <Container maxW="container.lg" border="1px solid black">
        <HStack spacing="8">
          <Flex>
            <Link href="/">Home</Link>
          </Flex>
          <Flex>
            <Link href="/videos">Videos</Link>
          </Flex>
          <Flex>Playlists</Flex>
          <Flex>Groups</Flex>
          <IconButton
            aria-label="Toggle dark mode"
            borderRadius="16px"
            variant="primary"
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
          <CreateOnButtonInput />
        </HStack>
      </Container>
    </Flex>
  )
}

export default NavbarLayout
