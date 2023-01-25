import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, IconButton, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import onPathname from 'utils/onPathname'
import Container from '../components/Container'
import CreateOnButtonInput from '../components/CreateOnButtonInput'

function NavbarLayout() {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const { pathname } = router
  const { button, input } = onPathname(pathname)

  return (
    <Container my="4">
      <Flex gap="8" alignItems="center">
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
        <CreateOnButtonInput
          buttonPlaceholder={button}
          inputPlaceholder={input}
        />
      </Flex>
    </Container>
  )
}

export default NavbarLayout
