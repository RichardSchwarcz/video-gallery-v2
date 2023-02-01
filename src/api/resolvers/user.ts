import {
  CreateUserInput,
  QueryResolvers,
  UserVideosInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const User: QueryResolvers = {
  Query: {
    userById: async (
      _parent: unknown,
      args: { userId: string },
      context: IPrismaContext
    ) => {
      const { userId } = args
      const user = context.prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          id: true,
          username: true,
          videos: {
            include: {
              tags: true,
            },
          },
          tags: true,
          playlists: {
            include: {
              videos: true,
            },
          },
        },
      })

      return user
    },
    userVideos: async (
      _parent: unknown,
      args: { input: UserVideosInput },
      context: IPrismaContext
    ) => {
      const { input } = args
      const user = context.prisma.user.findUnique({
        where: {
          id: input.userId,
        },
        select: {
          id: true,
          username: true,
          videos: {
            where: {
              AND: [
                { inTrash: input?.inTrash },
                { title: { contains: input?.searchInput } },
              ],
            },
            include: {
              tags: true,
            },
          },
        },
      })

      return user
    },
  },
  Mutation: {
    createUser: async (
      _parent: unknown,
      args: { input: CreateUserInput },
      context: IPrismaContext
    ) => {
      const { input } = args
      const user = await context.prisma.user.create({
        data: {
          ...input,
        },
      })
      return user
    },
  },
}

export default User
