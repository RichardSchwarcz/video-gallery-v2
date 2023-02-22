import {
  CreateVideoInput,
  DeleteVideoInput,
  QueryResolvers,
  UpdateVideoTagsInput,
  UpdateVideoTrashStatusInput,
  Video as VideoType,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'
import { getVideoData } from '../utils/getVideoInfo'

const Video: QueryResolvers = {
  Mutation: {
    createVideo: async (
      _parent: unknown,
      args: { input: CreateVideoInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      const userId = '851c14c1-72a8-46e3-8141-71394e386a1a'

      // find the user
      const user = await context.prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          videos: {
            include: {
              tags: true,
            },
          },
        },
      })

      // check if user exists
      if (!user) {
        throw new Error('User not found')
      }

      // check if user already has the video
      const doesUserHaveVideo = user?.videos.some(
        (video) => video.videoUrl === input.videoUrl
      )

      let video = {} as VideoType
      // if user has video, find it
      if (doesUserHaveVideo) {
        // find video in user's videos
        video = user?.videos.find((vid) => vid.videoUrl === input.videoUrl)
        // add message to video
        video.isNew = false
      }

      if (!doesUserHaveVideo) {
        // get video data
        const videoData = await getVideoData(input.videoUrl)

        // create the video
        video = await context.prisma.video.create({
          data: {
            title: videoData.title,
            videoUrl: input.videoUrl,
            author: videoData.author_name,
            authorUrl: videoData.author_url,
            thumbnailUrl: videoData.thumbnail_url,
            user: {
              connect: {
                id: user?.id,
              },
            },
          },
        })
        // add message to video
        video.isNew = true
      }

      return video
    },
    deleteVideo: async (
      _parent: unknown,
      args: { input: DeleteVideoInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      // delete the video
      await context.prisma.video.delete({
        where: {
          id: input.id,
        },
      })

      return true
    },
    updateVideoTags: async (
      _parent: unknown,
      args: { input: UpdateVideoTagsInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      // find the video
      const video = await context.prisma.video.findUnique({
        where: { id: input.id },
        include: { tags: true },
      })

      // check if video exists
      if (!video) {
        throw new Error('Video not found')
      }

      // check if tag exists
      const tag = await context.prisma.tag.findUnique({
        where: { id: input.tagsId },
      })

      if (!tag) {
        throw new Error('Tag not found')
      }

      // check if video already has the tag
      const doesVideoHaveTag = video?.tags.some(
        (videoTag) => videoTag.id === tag?.id
      ) // true or false

      // update video
      if (!doesVideoHaveTag) {
        await context.prisma.video.update({
          where: { id: input.id },
          data: {
            tags: {
              connect: {
                id: input.tagsId,
              },
            },
          },
        })
        // eslint-disable-next-line no-console
        console.log('tag added to video')
      } else {
        await context.prisma.video.update({
          where: { id: input.id },
          data: {
            tags: {
              disconnect: {
                id: input.tagsId,
              },
            },
          },
        })
        // eslint-disable-next-line no-console
        console.log('tag removed from video')
      }

      const updatedVideo = await context.prisma.video.findUnique({
        where: { id: input.id },
        include: { tags: true },
      })

      return updatedVideo
    },
    updateVideoTrashStatus: async (
      _parent: unknown,
      args: { input: UpdateVideoTrashStatusInput },
      context: IPrismaContext
    ) => {
      const { input } = args

      // find the video
      const video = await context.prisma.video.findUnique({
        where: { id: input.id },
      })

      // check videos current trash status
      const isVideoTrashed = video?.inTrash

      // update video
      let updatedVideo
      if (!isVideoTrashed) {
        updatedVideo = await context.prisma.video.update({
          where: { id: input.id },
          data: {
            inTrash: true,
          },
        })
        // eslint-disable-next-line no-console
        console.log('video moved to trash')
      } else {
        updatedVideo = await context.prisma.video.update({
          where: { id: input.id },
          data: {
            inTrash: false,
          },
        })
        // eslint-disable-next-line no-console
        console.log('video moved out of trash')
      }

      return updatedVideo
    },
  },
}

export default Video
