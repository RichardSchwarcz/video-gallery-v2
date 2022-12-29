import { QueryResolvers } from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Playlist: QueryResolvers = {
  Query: {
    playlists: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) => context.prisma.playlist.findMany(),
  },
}

export default Playlist
