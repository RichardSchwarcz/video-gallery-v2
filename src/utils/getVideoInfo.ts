const getYoutubeVideoId = (url: string) =>
  // https://www.youtube.com/watch?v=Y7cw-ziofkY&ab_channel=CodingShiksha
  // youtube video ID starts after `?v=` and ends before `&` => `Y7cw-ziofkY`
  // youtube video ID is 11 characters long
  url.split('v=')[1].substring(0, 11)

type VideoInfo = {
  thumbnail_url: string
  title: string
}

export const getVideoInfo = async (url: string) => {
  const id = getYoutubeVideoId(url)
  const video = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`
  const response = await fetch(video)
  const data = await response.json()
  const { thumbnail_url, title }: VideoInfo = data

  return {
    thumbnailUrl: thumbnail_url,
    title,
  }
}
