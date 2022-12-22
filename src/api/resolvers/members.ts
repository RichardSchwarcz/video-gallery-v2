import { QueryResolvers } from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Member: QueryResolvers = {
  Query: {
    members: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) => context.prisma.member.findMany(),
  },
}

export default Member
