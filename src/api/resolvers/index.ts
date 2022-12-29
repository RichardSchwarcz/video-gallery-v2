import { mergeResolvers } from '@graphql-tools/merge'
import Playlist from './playlist'
import Tag from './tag'
import User from './user'
import Video from './video'

export default mergeResolvers([User, Playlist, Tag, Video])
