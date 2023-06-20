import { Prisma } from '@prisma/client'
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

      // Determine the filter condition
      const filterCondition: Prisma.VideoWhereInput = { inTrash: false }

      if (input.filterInput && input.filterInput.length > 0) {
        // align types with the prisma schema
        const filterTags = input.filterInput.filter(Boolean) as string[]
        filterCondition.tags = { some: { name: { in: filterTags } } }
      }
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
                filterCondition,
                input.searchInput
                  ? { title: { contains: input.searchInput } } // if there is a search input, apply the search filter
                  : {}, // if there is no search input, return all videos
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

    userTrashVideos: async (
      _parent: unknown,
      _args: unknown, // TODO: add input type
      context: IPrismaContext
    ) => {
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
              inTrash: true,
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
