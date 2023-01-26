import { useEffect, useState } from 'react'
import { Flex, Image, Link, Text } from '@chakra-ui/react'
import { getVideoInfo, VideoInfoType } from 'utils/getVideoInfo'
import VideoCardMenu from './VideoCardMenu'

type VideoCardProps = {
  video: {
    id: string
    title: string
    url: string
    tags: string[]
    playlists: string[]
  }
}

function VideoCard({ video }: VideoCardProps) {
  const [videoInfo, setVideoInfo] = useState<VideoInfoType | null>(null)

  useEffect(() => {
    async function fetchVideoInfo() {
      const data = await getVideoInfo(video.url)
      setVideoInfo(data)
    }

    void fetchVideoInfo()
  }, [video])

  return (
    <>
      <Flex
        w="235px"
        h="235px"
        rounded="lg"
        direction="column"
        boxShadow="lg"
        // bgGradient="linear(to-tr, green.50,yellow.100, red.200)"
        bgAttachment="fixed"
      >
        <Link href={video.url} isExternal>
          <Image
            // thumbnail size is 1280x720. To scale it properly with fixed width... (235*720)/1280 = 132.2
            h="132.2px"
            w="235px"
            objectFit="cover"
            roundedTop="lg"
            src={videoInfo?.thumbnail_url}
            alt="thumbnail"
          />
        </Link>
        <Flex px="2" direction="column" gap="1">
          <Text fontWeight="medium" fontSize="sm">
            {videoInfo?.title}
          </Text>
          <Flex justifyContent="space-between">
            <Text color="gray.400">
              <Link href={videoInfo?.author_url} isExternal>
                {videoInfo?.author_name}
              </Link>
            </Text>
            <VideoCardMenu />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default VideoCard
