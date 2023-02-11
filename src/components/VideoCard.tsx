import { Flex, Image, Link, Skeleton, Text } from '@chakra-ui/react'
import { VideoType } from '../types/video'
import VideoCardMenu from './VideoCardMenu'

function VideoCard({ video }: VideoType) {
  return (
    <>
      <Flex
        w="235px"
        h="235px"
        rounded="lg"
        direction="column"
        boxShadow="lg"
        bgAttachment="fixed"
      >
        <Link href={video?.videoUrl} isExternal>
          <Skeleton isLoaded={!!video}>
            <Image
              // thumbnail size is 1280x720. To scale it properly with fixed width... (235*720)/1280 = 132.2
              h="132.2px"
              w="235px"
              objectFit="cover"
              roundedTop="lg"
              src={video?.thumbnailUrl}
              alt="thumbnail"
            />
          </Skeleton>
        </Link>
        <Flex px="2" direction="column" gap="1">
          <Text fontWeight="medium" fontSize="sm">
            {video?.title}
          </Text>
          <Flex justifyContent="space-between">
            <Text color="gray.400">
              <Link href={video?.authorUrl} isExternal>
                {video?.author}
              </Link>
            </Text>
            <VideoCardMenu video={video} />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default VideoCard
