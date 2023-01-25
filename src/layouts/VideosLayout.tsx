import { Flex } from '@chakra-ui/react'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

function VideosLayout() {
  const videoData = [
    {
      id: '1',
      title: 'Loading UI with Next.js 13 and React Suspense',
      url: 'https://www.youtube.com/watch?v=2o5m1ovfl3c',
      tags: ['react', 'nextjs'],
      playlists: ['nextjs'],
    },
    {
      id: '2',
      title: 'Loading UI with Next.js 13 and React Suspense',
      url: 'https://www.youtube.com/watch?v=2o5m1ovfl3c',
      tags: ['react', 'nextjs'],
      playlists: ['nextjs'],
    },
    {
      id: '3',
      title: 'Loading UI with Next.js 13 and React Suspense',
      url: 'https://www.youtube.com/watch?v=2o5m1ovfl3c',
      tags: ['react', 'nextjs'],
      playlists: ['nextjs'],
    },
    {
      id: '4',
      title: 'Loading UI with Next.js 13 and React Suspense',
      url: 'https://www.youtube.com/watch?v=2o5m1ovfl3c',
      tags: ['react', 'nextjs'],
      playlists: ['nextjs'],
    },

    {
      id: '5',
      title: 'Loading UI with Next.js 13 and React Suspense',
      url: 'https://www.youtube.com/watch?v=2o5m1ovfl3c',
      tags: ['react', 'nextjs'],
      playlists: ['nextjs'],
    },
  ]

  return (
    <Container my="4">
      <Flex flexWrap="wrap" gap={2}>
        {videoData.map((element) => (
          <VideoCard key={element.id} video={element} />
        ))}
      </Flex>
    </Container>
  )
}

export default VideosLayout
