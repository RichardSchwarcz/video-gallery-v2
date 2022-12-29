import { QueryResolvers } from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Video: QueryResolvers = {
  Query: {
    videos: async (_parent: unknown, _args: unknown, context: IPrismaContext) =>
      context.prisma.video.findMany(),
  },
}

export default Video
