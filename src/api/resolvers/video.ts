import {
  CreateVideoInput,
  DeleteVideoInput,
  QueryResolvers,
  UpdateVideoInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Video: QueryResolvers = {
  Query: {
    videos: async (_parent: unknown, _args: unknown, context: IPrismaContext) =>
      context.prisma.video.findMany({
        include: {
          tags: true,
          user: true,
          playlist: true,
        },
      }),
  },
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

      const video = await context.prisma.video.create({
        data: {
          title: input.title,
          url: input.url,
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
    updateVideo: async (
      _parent: unknown,
      args: { input: UpdateVideoInput },
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
        console.error(error.message)
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
        console.error(error.message)
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
        console.log('tag removed from video')
      }

      return updatedVideo
    },
  },
}

export default Video
