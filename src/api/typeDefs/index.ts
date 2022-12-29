import { mergeTypeDefs } from '@graphql-tools/merge'
import Playlist from './playlist.graphql'
import Tag from './tag.graphql'
import User from './user.graphql'
import Video from './video.graphql'

export default mergeTypeDefs([User, Video, Playlist, Tag])
