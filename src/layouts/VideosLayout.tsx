import { Flex } from '@chakra-ui/react'
import { Video } from 'generated/generated-graphql'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

type VideosLayoutProps = {
  videos: Video[]
}

function VideosLayout({ videos }: VideosLayoutProps) {
  return (
    <Container my="4">
      <Flex flexWrap="wrap" gap={2}>
        {videos?.map(
          (video) => video && <VideoCard key={video?.id} video={video} />
        )}
      </Flex>
    </Container>
  )
}

export default VideosLayout
