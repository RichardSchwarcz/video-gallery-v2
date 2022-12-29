import { QueryResolvers } from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Tag: QueryResolvers = {
  Query: {
    tags: async (_parent: unknown, _args: unknown, context: IPrismaContext) =>
      context.prisma.tag.findMany(),
  },
}

export default Tag
