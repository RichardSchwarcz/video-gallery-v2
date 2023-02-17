import {
  Flex,
  Image,
  Link,
  Skeleton,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { VideoType } from '../types/video'
import VideoCardMenu from './VideoCardMenu'

function VideoCard({ video }: VideoType) {
  const truncateTitle = (title: string, limit = 60): string => {
    if (title.length <= limit) {
      return title
    }
    const lastSpace = title.lastIndexOf(' ', limit)
    if (lastSpace === -1) {
      return `${title.slice(0, limit)}...`
    }
    return `${title.slice(0, lastSpace)}...`
  }

  return (
    <>
      <Flex
        w="244px"
        h="244px"
        rounded="lg"
        direction="column"
        boxShadow="lg"
        bgAttachment="fixed"
      >
        <Link href={video?.videoUrl as string} isExternal>
          <Skeleton isLoaded={!!video}>
            <Image
              // thumbnail size is 1280x720. To scale it properly with fixed width... (235*720)/1280 = 132.2
              h="137.25px"
              w="244px"
              objectFit="cover"
              roundedTop="lg"
              src={video?.thumbnailUrl as string}
              alt="thumbnail"
            />
          </Skeleton>
        </Link>
        <Flex px="2" direction="column" gap="1">
          <Tooltip
            label={video?.title}
            bg="gray.300"
            color="black"
            aria-label="video title"
            fontSize="xs"
            openDelay={200}
          >
            <Text fontWeight="medium" fontSize="sm">
              {truncateTitle(video?.title as string)}
            </Text>
          </Tooltip>
          <Flex justifyContent="space-between">
            <Text color="gray.400">
              <Link href={video?.authorUrl as string} isExternal>
                {video?.author}
              </Link>
            </Text>
            <VideoCardMenu video={video} />
          </Flex>
          <Flex gap="2">
            {video?.tags?.map((tag) => (
              <Tag colorScheme={tag?.color} key={tag?.id} size="sm">
                {tag?.name}
              </Tag>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default VideoCard
