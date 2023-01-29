import {
  CreateVideoInput,
  DeleteVideoInput,
  QueryResolvers,
  UpdateVideoTagsInput,
  UpdateVideoTrashStatusInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'
import { getVideoInfo } from '../utils/getVideoInfo'

const Video: QueryResolvers = {
  Mutation: {
    createVideo: async (
      _parent: unknown,
      args: { input: CreateVideoInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      const user = await context.prisma.user.findUnique({
        where: { id: input.userId },
      })

      if (!user) {
        throw new Error('User not found')
      }

      const videoInfo = await getVideoInfo(input.videoUrl)

      const video = await context.prisma.video.create({
        data: {
          title: videoInfo.title,
          videoUrl: input.videoUrl,
          author: videoInfo.author_name,
          authorUrl: videoInfo.author_url,
          thumbnailUrl: videoInfo.thumbnail_url,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      })

      return video
    },
    deleteVideo: async (
      _parent: unknown,
      args: { input: DeleteVideoInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      const video = await context.prisma.video.findUnique({
        where: {
          id: input.id,
        },
      })

      if (!video) {
        throw new Error('Video not found')
      }

      await context.prisma.video.delete({
        where: {
          id: input.id,
        },
      })

      return true
    },
    updateVideoTags: async (
      _parent: unknown,
      args: { input: UpdateVideoTagsInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      // find the video
      const video = await context.prisma.video.findUnique({
        where: { id: input.id },
        include: {
          tags: true,
        },
      })

      // check if video exists
      try {
        if (!video) {
          throw new Error('Video not found')
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }

      // check if tag exists
      const tag = await context.prisma.tag.findUnique({
        where: { id: input.tagsId },
      })

      try {
        if (!tag) {
          throw new Error('Tag not found')
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }

      // check if video already has the tag
      const doesVideoHaveTag = video?.tags.some(
        (videoTag) => videoTag.id === tag?.id
      ) // true or false

      // update video
      let updatedVideo
      if (!doesVideoHaveTag) {
        updatedVideo = await context.prisma.video.update({
          where: { id: input.id },
          data: {
            tags: {
              connect: {
                id: input.tagsId,
              },
            },
          },
        })
        // eslint-disable-next-line no-console
        console.log('tag added to video')
      } else {
        updatedVideo = await context.prisma.video.update({
          where: { id: input.id },
          data: {
            tags: {
              disconnect: {
                id: input.tagsId,
              },
            },
          },
        })
        // eslint-disable-next-line no-console
        console.log('tag removed from video')
      }

      return updatedVideo
    },
    updateVideoTrashStatus: async (
      _parent: unknown,
      args: { input: UpdateVideoTrashStatusInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      // find the video
      const video = await context.prisma.video.findUnique({
        where: { id: input.id },
      })

      // check videos current trash status
      const isVideoTrashed = video?.inTrash

      // update video
      let updatedVideo
      if (!isVideoTrashed) {
        updatedVideo = await context.prisma.video.update({
          where: { id: input.id },
          data: {
            inTrash: true,
          },
        })
        // eslint-disable-next-line no-console
        console.log('video moved to trash')
      } else {
        updatedVideo = await context.prisma.video.update({
          where: { id: input.id },
          data: {
            inTrash: false,
          },
        })
        // eslint-disable-next-line no-console
        console.log('video moved out of trash')
      }

      return updatedVideo
    },
  },
}

export default Video
