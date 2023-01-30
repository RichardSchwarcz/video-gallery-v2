export type VideoCard = {
  video: {
    id: string
    title: string
    videoUrl: string
    author: string
    authorUrl: string
    thumbnailUrl: string
    inTrash: boolean
    tags: {
      id: string
      color: string
      name: string
    }[]
  }
}
