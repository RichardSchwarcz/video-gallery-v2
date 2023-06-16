import {
  CreateUserInput,
  QueryResolvers,
  UserVideosInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'
import { USER_ID } from './userID'

const User: QueryResolvers = {
  Query: {
    userById: async (
      _parent: unknown,
      args: { userId: string },
      context: IPrismaContext
    ) => {
      // find the user
      const user = context.prisma.user.findUnique({
        where: {
          id: USER_ID, //! TODO: change this to the user id from the token
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

      // Find the user
      const user = await context.prisma.user.findUnique({
        where: {
          id: USER_ID, //! TODO: change this to the user id from the token
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
