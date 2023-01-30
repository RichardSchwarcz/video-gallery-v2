import { Flex } from '@chakra-ui/react'
import {
  useVideosByUserIdQuery,
  VideosByUserIdQueryResult,
} from 'generated/generated-graphql'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

function VideosLayout() {
  const { data, loading }: VideosByUserIdQueryResult = useVideosByUserIdQuery({
    variables: {
      userById: '851c14c1-72a8-46e3-8141-71394e386a1a',
    },
  })

  const videos = data?.userById?.videos

  return (
    <Container my="4">
      <Flex flexWrap="wrap" gap={2}>
        {videos?.map((element) => (
          <VideoCard key={element?.id} video={element} loading={loading} />
        ))}
      </Flex>
    </Container>
  )
}

export default VideosLayout
