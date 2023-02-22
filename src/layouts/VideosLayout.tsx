import { Flex } from '@chakra-ui/react'
import { UserTagsQuery, Video } from 'generated/generated-graphql'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

type VideosLayoutProps = {
  videos: Video[] | undefined
  userTags: UserTagsQuery | undefined
}

function VideosLayout({ videos, userTags }: VideosLayoutProps) {
  return (
    <Container my="4">
      <Flex flexWrap="wrap" gap={2}>
        {videos?.map(
          (video) =>
            video && (
              <VideoCard key={video?.id} video={video} userTags={userTags} />
            )
        )}
      </Flex>
    </Container>
  )
}

export default VideosLayout
