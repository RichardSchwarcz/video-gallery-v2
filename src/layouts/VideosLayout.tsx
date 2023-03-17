import { Flex } from '@chakra-ui/react'
import { UserTagsQuery, UserVideosQuery } from 'generated/generated-graphql'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

type VideosLayoutProps = {
  userVideos: UserVideosQuery | undefined
  userTags: UserTagsQuery | undefined
}

function VideosLayout({ userVideos, userTags }: VideosLayoutProps) {
  const videos = userVideos?.userVideos.videos

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
