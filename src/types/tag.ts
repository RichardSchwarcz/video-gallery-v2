import { UserTagsQuery } from 'generated/generated-graphql'

export type UserTagType = UserTagsQuery['userById']['tags'][0]
