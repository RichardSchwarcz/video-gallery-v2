import { useEffect, useState } from 'react'
import { Flex, Image, Link } from '@chakra-ui/react'
import { getVideoInfo } from 'utils/getVideoInfo'

type VideoCardProps = {
  video: {
    id: string
    title: string
    url: string
    tags: string[]
    playlists: string[]
  }
}

type VideoInfoType = {
  title: string
  thumbnailUrl: string
  authorName: string
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
        bgGradient="linear(to-tr, gray.300,yellow.400, pink.400)"
        bgAttachment="fixed"
      >
        <Link href={videoInfo?.thumbnailUrl} isExternal>
          <Image
            // thumbnail size is 1280x720. To scale it properly with fixed width... (235*720)/1280 = 132.2
            h="132.2px"
            w="235px"
            objectFit="cover"
            roundedTop="lg"
            src={videoInfo?.thumbnailUrl}
            alt="thumbnail"
          />
        </Link>
        <Flex
          h="45.2px"
          mx="2"
          justifyContent="space-between"
          alignItems="center"
        >
          {videoInfo?.title}
        </Flex>
        <Flex
          h="45.2px"
          mx="2"
          justifyContent="space-between"
          alignItems="center"
        >
          {videoInfo?.authorName}
        </Flex>
        <Flex mx="2" pb="2" />
      </Flex>
    </>
  )
}

export default VideoCard
