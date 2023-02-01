import { Flex } from '@chakra-ui/react'
import { useUserVideosQuery } from 'generated/generated-graphql'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

function VideosLayout() {
  const { data, loading } = useUserVideosQuery({
    variables: {
      input: {
        userId: '851c14c1-72a8-46e3-8141-71394e386a1a',
        inTrash: false,
      },
    },
  })

  const videos = data?.userVideos?.videos
  return (
    <Container my="4">
      <Flex flexWrap="wrap" gap={2}>
        {videos?.map((video) => (
          <VideoCard key={video?.id} video={video} loading={loading} />
        ))}
      </Flex>
    </Container>
  )
}

export default VideosLayout
