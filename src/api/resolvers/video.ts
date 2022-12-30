import {
  CreateVideoInput,
  DeleteVideoInput,
  QueryResolvers,
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
  },
}

export default Video
