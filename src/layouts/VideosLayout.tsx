import { Flex } from '@chakra-ui/react'
import { useUserVideosQuery } from 'generated/generated-graphql'
import apolloClient from 'lib/apollo'
import Container from 'components/Container'
import VideoCard from '../components/VideoCard'

type VideosLayoutProps = {
  debouncedInput: string
}

function VideosLayout({ debouncedInput }: VideosLayoutProps) {
  const { data } = useUserVideosQuery({
    variables: {
      input: {
        userId: '851c14c1-72a8-46e3-8141-71394e386a1a',
        inTrash: false,
        searchInput: debouncedInput,
      },
    },
    onCompleted: () => {
      void apolloClient.refetchQueries({
        include: ['UserVideos'],
      })
    },
  })

  const videos = data?.userVideos?.videos
  return (
    <Container my="4">
      <Flex flexWrap="wrap" gap={2}>
        {videos?.map((video) => (
          <VideoCard key={video?.id} video={video} />
        ))}
      </Flex>
    </Container>
  )
}

export default VideosLayout
