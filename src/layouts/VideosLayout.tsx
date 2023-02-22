import { Flex } from '@chakra-ui/react'
import { useUserTagsQuery, Video } from 'generated/generated-graphql'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

type VideosLayoutProps = {
  videos: Video[]
}

function VideosLayout({ videos }: VideosLayoutProps) {
  const { data: userTags } = useUserTagsQuery()
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
