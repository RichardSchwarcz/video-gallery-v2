import {
  CreateTagInput,
  DeleteTagInput,
  QueryResolvers,
  UpdateTagInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Tag: QueryResolvers = {
  Query: {
    tags: async (_parent: unknown, _args: unknown, context: IPrismaContext) =>
      context.prisma.tag.findMany(),
  },
  Mutation: {
    createTag: async (
      _parent: unknown,
      args: { input: CreateTagInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      // find the user
      const user = await context.prisma.user.findUnique({
        where: { id: input.userId },
        include: {
          tags: true,
        },
      })

      // check if user has already tag with same name
      const doesUserHaveTag = user?.tags.some((tag) => tag.name === input.name) // true or false

      // create the tag
      let tag
      if (!doesUserHaveTag) {
        tag = await context.prisma.tag.create({
          data: {
            name: input.name,
            color: input.color,
            user: {
              connect: {
                id: user?.id,
              },
            },
          },
        })
      } else {
        console.error('User already has a tag with this name')
      }

      return tag
    },
    deleteTag: async (
      _parent: unknown,
      args: { input: DeleteTagInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      const tag = await context.prisma.tag.findUnique({
        where: {
          id: input.id,
        },
      })

      try {
        if (!tag) {
          throw new Error('Tag not found')
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error.message)
      }

      await context.prisma.tag.delete({
        where: {
          id: input.id,
        },
      })

      return true
    },
    updateTag: async (
      _parent: unknown,
      args: { input: UpdateTagInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      const tag = await context.prisma.tag.findUnique({
        where: {
          id: input.id,
        },
      })

      try {
        if (!tag) {
          throw new Error('Tag not found')
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error.message)
      }

      const updatedTag = await context.prisma.tag.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          color: input.color,
        },
      })

      return updatedTag
    },
  },
}

export default Tag
