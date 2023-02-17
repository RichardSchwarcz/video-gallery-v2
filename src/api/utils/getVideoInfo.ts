interface YouTubeVideoInfo {
  isValid: boolean
  videoId: string
}

export const extractYouTubeVideoInfo = (url: string): YouTubeVideoInfo => {
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([a-zA-Z0-9_-]+)/
  const matches = youtubeRegex.exec(url)

  if (!matches || !matches[5]) {
    return { isValid: false, videoId: '' }
  }
  return { isValid: true, videoId: matches[5] }
}

export type VideoDataType = {
  thumbnail_url: string
  title: string
  author_name: string
  author_url: string
}

export const getVideoData = async (url: string): Promise<VideoDataType> => {
  const videoInfo = extractYouTubeVideoInfo(url)

  if (!videoInfo.isValid) {
    throw new Error('Invalid YouTube URL')
  }

  const video = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoInfo.videoId}`
  const response = await fetch(video)
  const data = await response.json()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { thumbnail_url, title, author_name, author_url }: VideoDataType = data

  return {
    thumbnail_url,
    title,
    author_name,
    author_url,
  }
}
