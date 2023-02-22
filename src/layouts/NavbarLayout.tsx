import { MoonIcon, SmallAddIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, IconButton, useColorMode, useToast } from '@chakra-ui/react'
import { extractYouTubeVideoInfo } from 'api/utils/getVideoInfo'
import { useCreateVideoMutation } from 'generated/generated-graphql'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SwitchButtonInput from 'components/SwitchButtonInput'
import onPathname from 'utils/onPathname'
import Container from '../components/Container'
import { ToastBody } from '../utils/toastBody'

function NavbarLayout() {
  const toast = useToast()

  const [createVideoMutation, { loading }] = useCreateVideoMutation({
    refetchQueries: ['UserVideos'],
  })

  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const { pathname } = router
  const { button, input } = onPathname(pathname)

  const handleCreateVideo = async (urlInput: string) => {
    const videoURL = extractYouTubeVideoInfo(urlInput) // check if url is valid

    if (urlInput === '') {
      toast(ToastBody.EmptyInput)
    }

    if (!videoURL.isValid && urlInput !== '') {
      toast(ToastBody.InvalidURL)
    }

    if (videoURL.isValid) {
      await createVideoMutation({
        variables: {
          input: {
            videoUrl: urlInput,
          },
        },
        onCompleted(data) {
          if (data?.createVideo.isNew) {
            toast(ToastBody.VideoAdded)
          }
          if (!data?.createVideo.isNew) {
            toast(ToastBody.VideoExists)
          }
        },
      })
    }
  }

  return (
    <Container my="4">
      <Flex gap="8" alignItems="center">
        <Flex>
          <Link href="/">Home</Link>
        </Flex>
        <Flex>
          <Link href="/videos">Videos</Link>
        </Flex>
        <Flex>
          <Link href="/playlists">Playlists</Link>
        </Flex>
        <Flex>Groups</Flex>
        <IconButton
          aria-label="Toggle dark mode"
          borderRadius="16px"
          variant="primary"
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
        <SwitchButtonInput
          buttonPlaceholder={button}
          inputPlaceholder={input}
          buttonIcon={<SmallAddIcon />}
          color="green"
          size="md"
          loading={loading}
          handleCreate={handleCreateVideo}
        />
      </Flex>
    </Container>
  )
}

export default NavbarLayout
