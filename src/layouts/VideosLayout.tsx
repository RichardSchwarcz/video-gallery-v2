import { Flex } from '@chakra-ui/react'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

function VideosLayout() {
  const videoData = ['hehe', 'haha', 'hoho', 'chih', 'chci']

  return (
    <Container my="4">
      <Flex flexWrap="wrap" gap={2}>
        {videoData.map((element) => (
          <VideoCard key={element} />
        ))}
      </Flex>
    </Container>
  )
}

export default VideosLayout
