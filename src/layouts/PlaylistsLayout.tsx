import { Flex } from '@chakra-ui/react'
import Container from 'components/Container'
import PlaylistCard from 'components/PlaylistCard'

function PlaylistsLayout() {
  const playlistData = [
    {
      id: '1',
      name: 'Loading UI with Next.js 13 and React Suspense',
      videos: ['react', 'nextjs'],
    },
    {
      id: '2',
      name: 'Loading UI with Next.js 13 and React Suspense',
      videos: ['react', 'nextjs'],
    },
    {
      id: '3',
      name: 'Loading UI with Next.js 13 and React Suspense',
      videos: ['react', 'nextjs'],
    },
    {
      id: '4',
      name: 'Loading UI with Next.js 13 and React Suspense',
      videos: ['react', 'nextjs'],
    },
  ]

  return (
    <Container my="4">
      <Flex flexWrap="wrap" gap={2}>
        {playlistData.map((element) => (
          <PlaylistCard key={element.id} playlist={element} />
        ))}
      </Flex>
    </Container>
  )
}

export default PlaylistsLayout
