import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export enum Color {
  Blue = 'BLUE',
  Cyan = 'CYAN',
  Gray = 'GRAY',
  Green = 'GREEN',
  Orange = 'ORANGE',
  Pink = 'PINK',
  Purple = 'PURPLE',
  Red = 'RED',
  Teal = 'TEAL',
  Yellow = 'YELLOW',
}

export type CreateTagInput = {
  name: Scalars['String']
}

export type CreateUserInput = {
  password: Scalars['String']
  username: Scalars['String']
}

export type CreateVideoInput = {
  videoUrl: Scalars['String']
}

export type DeleteTagInput = {
  id: Scalars['String']
}

export type DeleteVideoInput = {
  id: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createTag: Tag
  createUser: User
  createVideo: Video
  deleteTag: Scalars['Boolean']
  deleteVideo: Scalars['Boolean']
  updateTag: Tag
  updateVideoTags: Video
  updateVideoTrashStatus: Video
}

export type MutationCreateTagArgs = {
  input?: InputMaybe<CreateTagInput>
}

export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>
}

export type MutationCreateVideoArgs = {
  input?: InputMaybe<CreateVideoInput>
}

export type MutationDeleteTagArgs = {
  input?: InputMaybe<DeleteTagInput>
}

export type MutationDeleteVideoArgs = {
  input?: InputMaybe<DeleteVideoInput>
}

export type MutationUpdateTagArgs = {
  input?: InputMaybe<UpdateTagInput>
}

export type MutationUpdateVideoTagsArgs = {
  input?: InputMaybe<UpdateVideoTagsInput>
}

export type MutationUpdateVideoTrashStatusArgs = {
  input?: InputMaybe<UpdateVideoTrashStatusInput>
}

export type Playlist = {
  __typename?: 'Playlist'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  videos?: Maybe<Array<Maybe<Video>>>
}

export type Query = {
  __typename?: 'Query'
  playlists: Array<Maybe<Playlist>>
  userById: User
  userVideos: User
}

export type QueryUserByIdArgs = {
  userId?: InputMaybe<Scalars['String']>
}

export type QueryUserVideosArgs = {
  input?: InputMaybe<UserVideosInput>
}

export type Tag = {
  __typename?: 'Tag'
  color: Color
  id: Scalars['String']
  name: Scalars['String']
  userId: Scalars['String']
  videos: Array<Maybe<Video>>
}

export type UpdateTagInput = {
  color?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  name?: InputMaybe<Scalars['String']>
}

export type UpdateVideoTagsInput = {
  id: Scalars['String']
  tagsId: Scalars['String']
}

export type UpdateVideoTrashStatusInput = {
  id: Scalars['String']
  inTrash: Scalars['Boolean']
}

export type User = {
  __typename?: 'User'
  id: Scalars['String']
  password: Scalars['String']
  playlists?: Maybe<Array<Maybe<Playlist>>>
  tags: Array<Maybe<Tag>>
  username: Scalars['String']
  videos: Array<Maybe<Video>>
}

export type UserVideosInput = {
  inTrash: Scalars['Boolean']
  searchInput?: InputMaybe<Scalars['String']>
}

export type Video = {
  __typename?: 'Video'
  author: Scalars['String']
  authorUrl: Scalars['String']
  id: Scalars['String']
  inTrash: Scalars['Boolean']
  isNew: Scalars['Boolean']
  tags: Array<Maybe<Tag>>
  thumbnailUrl: Scalars['String']
  title: Scalars['String']
  videoUrl: Scalars['String']
}

export type CreateTagMutationVariables = Exact<{
  input?: InputMaybe<CreateTagInput>
}>

export type CreateTagMutation = {
  __typename?: 'Mutation'
  createTag: { __typename?: 'Tag'; color: Color; id: string; name: string }
}

export type DeleteTagMutationVariables = Exact<{
  input?: InputMaybe<DeleteTagInput>
}>

export type DeleteTagMutation = { __typename?: 'Mutation'; deleteTag: boolean }

export type UpdateTagMutationVariables = Exact<{
  input?: InputMaybe<UpdateTagInput>
}>

export type UpdateTagMutation = {
  __typename?: 'Mutation'
  updateTag: { __typename?: 'Tag'; name: string; color: Color }
}

export type UsernameByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>
}>

export type UsernameByUserIdQuery = {
  __typename?: 'Query'
  userById: { __typename?: 'User'; username: string; id: string }
}

export type UserVideosQueryVariables = Exact<{
  input?: InputMaybe<UserVideosInput>
}>

export type UserVideosQuery = {
  __typename?: 'Query'
  userVideos: {
    __typename?: 'User'
    id: string
    username: string
    videos: Array<{
      __typename?: 'Video'
      id: string
      authorUrl: string
      author: string
      inTrash: boolean
      title: string
      videoUrl: string
      thumbnailUrl: string
      tags: Array<{
        __typename?: 'Tag'
        id: string
        name: string
        color: Color
      } | null>
    } | null>
  }
}

export type UserTagsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>
}>

export type UserTagsQuery = {
  __typename?: 'Query'
  userById: {
    __typename?: 'User'
    username: string
    id: string
    tags: Array<{
      __typename?: 'Tag'
      color: Color
      id: string
      name: string
      videos: Array<{ __typename?: 'Video'; title: string } | null>
    } | null>
  }
}

export type UserPlaylistsByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>
}>

export type UserPlaylistsByUserIdQuery = {
  __typename?: 'Query'
  userById: {
    __typename?: 'User'
    username: string
    id: string
    playlists?: Array<{
      __typename?: 'Playlist'
      id?: string | null
      name?: string | null
      videos?: Array<{ __typename?: 'Video'; id: string } | null> | null
    } | null> | null
  }
}

export type CreateUserMutationVariables = Exact<{
  input?: InputMaybe<CreateUserInput>
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser: {
    __typename?: 'User'
    username: string
    password: string
    id: string
  }
}

export type CreateVideoMutationVariables = Exact<{
  input?: InputMaybe<CreateVideoInput>
}>

export type CreateVideoMutation = {
  __typename?: 'Mutation'
  createVideo: {
    __typename?: 'Video'
    videoUrl: string
    title: string
    thumbnailUrl: string
    inTrash: boolean
    id: string
    authorUrl: string
    author: string
    isNew: boolean
  }
}

export type UpdateVideoTrashStatusMutationVariables = Exact<{
  input?: InputMaybe<UpdateVideoTrashStatusInput>
}>

export type UpdateVideoTrashStatusMutation = {
  __typename?: 'Mutation'
  updateVideoTrashStatus: { __typename?: 'Video'; inTrash: boolean }
}

export type UpdateVideoTagsMutationVariables = Exact<{
  input?: InputMaybe<UpdateVideoTagsInput>
}>

export type UpdateVideoTagsMutation = {
  __typename?: 'Mutation'
  updateVideoTags: {
    __typename?: 'Video'
    tags: Array<{ __typename?: 'Tag'; name: string } | null>
  }
}

export const CreateTagDocument = gql`
  mutation CreateTag($input: CreateTagInput) {
    createTag(input: $input) {
      color
      id
      name
    }
  }
`
export type CreateTagMutationFn = Apollo.MutationFunction<
  CreateTagMutation,
  CreateTagMutationVariables
>

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTagMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTagMutation,
    CreateTagMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(
    CreateTagDocument,
    options
  )
}
export type CreateTagMutationHookResult = ReturnType<
  typeof useCreateTagMutation
>
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<
  CreateTagMutation,
  CreateTagMutationVariables
>
export const DeleteTagDocument = gql`
  mutation DeleteTag($input: DeleteTagInput) {
    deleteTag(input: $input)
  }
`
export type DeleteTagMutationFn = Apollo.MutationFunction<
  DeleteTagMutation,
  DeleteTagMutationVariables
>

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTagMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTagMutation,
    DeleteTagMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(
    DeleteTagDocument,
    options
  )
}
export type DeleteTagMutationHookResult = ReturnType<
  typeof useDeleteTagMutation
>
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<
  DeleteTagMutation,
  DeleteTagMutationVariables
>
export const UpdateTagDocument = gql`
  mutation UpdateTag($input: UpdateTagInput) {
    updateTag(input: $input) {
      name
      color
    }
  }
`
export type UpdateTagMutationFn = Apollo.MutationFunction<
  UpdateTagMutation,
  UpdateTagMutationVariables
>

/**
 * __useUpdateTagMutation__
 *
 * To run a mutation, you first call `useUpdateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTagMutation, { data, loading, error }] = useUpdateTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTagMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTagMutation,
    UpdateTagMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(
    UpdateTagDocument,
    options
  )
}
export type UpdateTagMutationHookResult = ReturnType<
  typeof useUpdateTagMutation
>
export type UpdateTagMutationResult = Apollo.MutationResult<UpdateTagMutation>
export type UpdateTagMutationOptions = Apollo.BaseMutationOptions<
  UpdateTagMutation,
  UpdateTagMutationVariables
>
export const UsernameByUserIdDocument = gql`
  query UsernameByUserId($userId: String) {
    userById(userId: $userId) {
      username
      id
    }
  }
`

/**
 * __useUsernameByUserIdQuery__
 *
 * To run a query within a React component, call `useUsernameByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsernameByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsernameByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUsernameByUserIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UsernameByUserIdQuery,
    UsernameByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsernameByUserIdQuery, UsernameByUserIdQueryVariables>(
    UsernameByUserIdDocument,
    options
  )
}
export function useUsernameByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsernameByUserIdQuery,
    UsernameByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    UsernameByUserIdQuery,
    UsernameByUserIdQueryVariables
  >(UsernameByUserIdDocument, options)
}
export type UsernameByUserIdQueryHookResult = ReturnType<
  typeof useUsernameByUserIdQuery
>
export type UsernameByUserIdLazyQueryHookResult = ReturnType<
  typeof useUsernameByUserIdLazyQuery
>
export type UsernameByUserIdQueryResult = Apollo.QueryResult<
  UsernameByUserIdQuery,
  UsernameByUserIdQueryVariables
>
export const UserVideosDocument = gql`
  query UserVideos($input: UserVideosInput) {
    userVideos(input: $input) {
      id
      username
      videos {
        id
        authorUrl
        author
        inTrash
        title
        videoUrl
        thumbnailUrl
        tags {
          id
          name
          color
        }
      }
    }
  }
`

/**
 * __useUserVideosQuery__
 *
 * To run a query within a React component, call `useUserVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserVideosQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserVideosQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserVideosQuery,
    UserVideosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserVideosQuery, UserVideosQueryVariables>(
    UserVideosDocument,
    options
  )
}
export function useUserVideosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserVideosQuery,
    UserVideosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserVideosQuery, UserVideosQueryVariables>(
    UserVideosDocument,
    options
  )
}
export type UserVideosQueryHookResult = ReturnType<typeof useUserVideosQuery>
export type UserVideosLazyQueryHookResult = ReturnType<
  typeof useUserVideosLazyQuery
>
export type UserVideosQueryResult = Apollo.QueryResult<
  UserVideosQuery,
  UserVideosQueryVariables
>
export const UserTagsDocument = gql`
  query UserTags($userId: String) {
    userById(userId: $userId) {
      username
      id
      tags {
        color
        id
        name
        videos {
          title
        }
      }
    }
  }
`

/**
 * __useUserTagsQuery__
 *
 * To run a query within a React component, call `useUserTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserTagsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<UserTagsQuery, UserTagsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserTagsQuery, UserTagsQueryVariables>(
    UserTagsDocument,
    options
  )
}
export function useUserTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserTagsQuery,
    UserTagsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserTagsQuery, UserTagsQueryVariables>(
    UserTagsDocument,
    options
  )
}
export type UserTagsQueryHookResult = ReturnType<typeof useUserTagsQuery>
export type UserTagsLazyQueryHookResult = ReturnType<
  typeof useUserTagsLazyQuery
>
export type UserTagsQueryResult = Apollo.QueryResult<
  UserTagsQuery,
  UserTagsQueryVariables
>
export const UserPlaylistsByUserIdDocument = gql`
  query UserPlaylistsByUserId($userId: String) {
    userById(userId: $userId) {
      username
      id
      playlists {
        id
        name
        videos {
          id
        }
      }
    }
  }
`

/**
 * __useUserPlaylistsByUserIdQuery__
 *
 * To run a query within a React component, call `useUserPlaylistsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPlaylistsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPlaylistsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserPlaylistsByUserIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserPlaylistsByUserIdQuery,
    UserPlaylistsByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    UserPlaylistsByUserIdQuery,
    UserPlaylistsByUserIdQueryVariables
  >(UserPlaylistsByUserIdDocument, options)
}
export function useUserPlaylistsByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserPlaylistsByUserIdQuery,
    UserPlaylistsByUserIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    UserPlaylistsByUserIdQuery,
    UserPlaylistsByUserIdQueryVariables
  >(UserPlaylistsByUserIdDocument, options)
}
export type UserPlaylistsByUserIdQueryHookResult = ReturnType<
  typeof useUserPlaylistsByUserIdQuery
>
export type UserPlaylistsByUserIdLazyQueryHookResult = ReturnType<
  typeof useUserPlaylistsByUserIdLazyQuery
>
export type UserPlaylistsByUserIdQueryResult = Apollo.QueryResult<
  UserPlaylistsByUserIdQuery,
  UserPlaylistsByUserIdQueryVariables
>
export const CreateUserDocument = gql`
  mutation CreateUser($input: CreateUserInput) {
    createUser(input: $input) {
      username
      password
      id
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  )
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const CreateVideoDocument = gql`
  mutation CreateVideo($input: CreateVideoInput) {
    createVideo(input: $input) {
      videoUrl
      title
      thumbnailUrl
      inTrash
      id
      authorUrl
      author
      isNew
    }
  }
`
export type CreateVideoMutationFn = Apollo.MutationFunction<
  CreateVideoMutation,
  CreateVideoMutationVariables
>

/**
 * __useCreateVideoMutation__
 *
 * To run a mutation, you first call `useCreateVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideoMutation, { data, loading, error }] = useCreateVideoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVideoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVideoMutation,
    CreateVideoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateVideoMutation, CreateVideoMutationVariables>(
    CreateVideoDocument,
    options
  )
}
export type CreateVideoMutationHookResult = ReturnType<
  typeof useCreateVideoMutation
>
export type CreateVideoMutationResult =
  Apollo.MutationResult<CreateVideoMutation>
export type CreateVideoMutationOptions = Apollo.BaseMutationOptions<
  CreateVideoMutation,
  CreateVideoMutationVariables
>
export const UpdateVideoTrashStatusDocument = gql`
  mutation UpdateVideoTrashStatus($input: UpdateVideoTrashStatusInput) {
    updateVideoTrashStatus(input: $input) {
      inTrash
    }
  }
`
export type UpdateVideoTrashStatusMutationFn = Apollo.MutationFunction<
  UpdateVideoTrashStatusMutation,
  UpdateVideoTrashStatusMutationVariables
>

/**
 * __useUpdateVideoTrashStatusMutation__
 *
 * To run a mutation, you first call `useUpdateVideoTrashStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVideoTrashStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVideoTrashStatusMutation, { data, loading, error }] = useUpdateVideoTrashStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVideoTrashStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateVideoTrashStatusMutation,
    UpdateVideoTrashStatusMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateVideoTrashStatusMutation,
    UpdateVideoTrashStatusMutationVariables
  >(UpdateVideoTrashStatusDocument, options)
}
export type UpdateVideoTrashStatusMutationHookResult = ReturnType<
  typeof useUpdateVideoTrashStatusMutation
>
export type UpdateVideoTrashStatusMutationResult =
  Apollo.MutationResult<UpdateVideoTrashStatusMutation>
export type UpdateVideoTrashStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdateVideoTrashStatusMutation,
  UpdateVideoTrashStatusMutationVariables
>
export const UpdateVideoTagsDocument = gql`
  mutation UpdateVideoTags($input: UpdateVideoTagsInput) {
    updateVideoTags(input: $input) {
      tags {
        name
      }
    }
  }
`
export type UpdateVideoTagsMutationFn = Apollo.MutationFunction<
  UpdateVideoTagsMutation,
  UpdateVideoTagsMutationVariables
>

/**
 * __useUpdateVideoTagsMutation__
 *
 * To run a mutation, you first call `useUpdateVideoTagsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVideoTagsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVideoTagsMutation, { data, loading, error }] = useUpdateVideoTagsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVideoTagsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateVideoTagsMutation,
    UpdateVideoTagsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateVideoTagsMutation,
    UpdateVideoTagsMutationVariables
  >(UpdateVideoTagsDocument, options)
}
export type UpdateVideoTagsMutationHookResult = ReturnType<
  typeof useUpdateVideoTagsMutation
>
export type UpdateVideoTagsMutationResult =
  Apollo.MutationResult<UpdateVideoTagsMutation>
export type UpdateVideoTagsMutationOptions = Apollo.BaseMutationOptions<
  UpdateVideoTagsMutation,
  UpdateVideoTagsMutationVariables
>
