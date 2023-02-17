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
      const userId = '851c14c1-72a8-46e3-8141-71394e386a1a'

      // find the user
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
          tags: {
            include: {
              videos: true,
            },
          },
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

      // find the user
      const user = context.prisma.user.findUnique({
        where: {
          id: '851c14c1-72a8-46e3-8141-71394e386a1a',
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

      // create the user
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
