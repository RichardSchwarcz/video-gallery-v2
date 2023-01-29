import { CreateUserInput, QueryResolvers } from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const User: QueryResolvers = {
  Query: {
    users: async (_parent: unknown, _args: unknown, context: IPrismaContext) =>
      context.prisma.user.findMany({
        include: {
          videos: true,
          tags: true,
          playlists: true,
        },
      }),
    userById: async (
      _parent: unknown,
      args: { id: string },
      context: IPrismaContext
    ) =>
      context.prisma.user.findUnique({
        where: {
          id: args.id,
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
      }),
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
