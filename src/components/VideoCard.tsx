import {
  Flex,
  Image,
  Link,
  Skeleton,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import VideoCardMenu from './VideoCardMenu'
import { UserTagsQuery, UserVideosQuery } from 'generated/generated-graphql'

type VideoCardProps = {
  video: UserVideosQuery['userVideos']['videos'][number] | undefined
  userTags: UserTagsQuery | undefined
}

function VideoCard({ video, userTags }: VideoCardProps) {
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

        {/* Thumbnail */}
        <Link href={video?.videoUrl as string} isExternal>
          <Skeleton isLoaded={!!video}>
            <Image
              // thumbnail size is 1280x720. To scale it properly with fixed width... (244*720)/1280 = 137.25
              h="137.25px"
              w="244px"
              objectFit="cover"
              roundedTop="lg"
              src={video?.thumbnailUrl as string}
              alt="thumbnail"
            />
          </Skeleton>
        </Link>

        {/* Title */}
        <Flex px="2" direction="column" gap="1">
          <Tooltip
            label={video?.title}
            bg="gray.300"
            color="black"
            aria-label="video title"
            fontSize="xs"
            openDelay={250}
          >
            <Text fontWeight="medium" fontSize="sm">
              {truncateTitle(video?.title as string)}
            </Text>
          </Tooltip>

          {/* Author and menu*/}
          <Flex justifyContent="space-between">
          <Tooltip
            label={video?.author}
            bg="gray.300"
            color="black"
            aria-label="video title"
            fontSize="xs"
            openDelay={200}
          >
            <Text color="gray.400">
              <Link href={video?.authorUrl as string} isExternal>
                {truncateTitle(video?.author as string, 25)}
              </Link>
            </Text>
            </Tooltip>
            <VideoCardMenu video={video} userTags={userTags} />
          </Flex>

          {/* Tags */}
          <Flex gap="2">
            {video?.tags?.map((tag) => (
              <Tag
                colorScheme={tag?.color.toLowerCase()}
                key={tag?.id}
                size="sm"
              >
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
