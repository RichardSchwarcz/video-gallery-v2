import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTagInput = {
  color: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['String'];
  videoId?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateVideoInput = {
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userId: Scalars['String'];
  videoUrl: Scalars['String'];
};

export type DeleteTagInput = {
  id: Scalars['String'];
};

export type DeleteVideoInput = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTag: Tag;
  createUser: User;
  createVideo: Video;
  deleteTag: Scalars['Boolean'];
  deleteVideo: Scalars['Boolean'];
  updateTag: Tag;
  updateVideoTags: Video;
  updateVideoTrashStatus: Video;
};


export type MutationCreateTagArgs = {
  input?: InputMaybe<CreateTagInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateVideoArgs = {
  input?: InputMaybe<CreateVideoInput>;
};


export type MutationDeleteTagArgs = {
  input?: InputMaybe<DeleteTagInput>;
};


export type MutationDeleteVideoArgs = {
  input?: InputMaybe<DeleteVideoInput>;
};


export type MutationUpdateTagArgs = {
  input?: InputMaybe<UpdateTagInput>;
};


export type MutationUpdateVideoTagsArgs = {
  input?: InputMaybe<UpdateVideoTagsInput>;
};


export type MutationUpdateVideoTrashStatusArgs = {
  input?: InputMaybe<UpdateVideoTrashStatusInput>;
};

export type Playlist = {
  __typename?: 'Playlist';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type Query = {
  __typename?: 'Query';
  playlists: Array<Maybe<Playlist>>;
  userById?: Maybe<User>;
};


export type QueryUserByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
};

export type UpdateTagInput = {
  color?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateVideoTagsInput = {
  id: Scalars['String'];
  tagsId: Scalars['String'];
};

export type UpdateVideoTrashStatusInput = {
  id: Scalars['String'];
  inTrash: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  playlists?: Maybe<Array<Maybe<Playlist>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  username?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<Video>>>;
};

export type Video = {
  __typename?: 'Video';
  author?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inTrash?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type QueryUsernameByUserIdQueryVariables = Exact<{
  userById?: InputMaybe<Scalars['String']>;
}>;


export type QueryUsernameByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null } | null };

export type VideosByUserIdQueryVariables = Exact<{
  userById?: InputMaybe<Scalars['String']>;
}>;


export type VideosByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null, videos?: Array<{ __typename?: 'Video', id?: string | null, title?: string | null, videoUrl?: string | null, author?: string | null, authorUrl?: string | null, thumbnailUrl?: string | null, inTrash?: boolean | null, tags?: Array<{ __typename?: 'Tag', color?: string | null, id?: string | null, name?: string | null } | null> | null } | null> | null } | null };

export type UserTagsByUserIdQueryVariables = Exact<{
  userById?: InputMaybe<Scalars['String']>;
}>;


export type UserTagsByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null, tags?: Array<{ __typename?: 'Tag', color?: string | null, id?: string | null, name?: string | null } | null> | null } | null };

export type UserPlaylistsByUserIdQueryVariables = Exact<{
  userById?: InputMaybe<Scalars['String']>;
}>;


export type UserPlaylistsByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null, playlists?: Array<{ __typename?: 'Playlist', id?: string | null, name?: string | null, videos?: Array<{ __typename?: 'Video', id?: string | null } | null> | null } | null> | null } | null };

export type CreateUserMutationVariables = Exact<{
  input?: InputMaybe<CreateUserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username?: string | null, password?: string | null, id?: string | null } };

export type CreateVideoMutationVariables = Exact<{
  input?: InputMaybe<CreateVideoInput>;
}>;


export type CreateVideoMutation = { __typename?: 'Mutation', createVideo: { __typename?: 'Video', id?: string | null } };


export const QueryUsernameByUserIdDocument = gql`
    query QueryUsernameByUserId($userById: String) {
  userById(id: $userById) {
    username
    id
  }
}
    `;

/**
 * __useQueryUsernameByUserIdQuery__
 *
 * To run a query within a React component, call `useQueryUsernameByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUsernameByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUsernameByUserIdQuery({
 *   variables: {
 *      userById: // value for 'userById'
 *   },
 * });
 */
export function useQueryUsernameByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<QueryUsernameByUserIdQuery, QueryUsernameByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUsernameByUserIdQuery, QueryUsernameByUserIdQueryVariables>(QueryUsernameByUserIdDocument, options);
      }
export function useQueryUsernameByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUsernameByUserIdQuery, QueryUsernameByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUsernameByUserIdQuery, QueryUsernameByUserIdQueryVariables>(QueryUsernameByUserIdDocument, options);
        }
export type QueryUsernameByUserIdQueryHookResult = ReturnType<typeof useQueryUsernameByUserIdQuery>;
export type QueryUsernameByUserIdLazyQueryHookResult = ReturnType<typeof useQueryUsernameByUserIdLazyQuery>;
export type QueryUsernameByUserIdQueryResult = Apollo.QueryResult<QueryUsernameByUserIdQuery, QueryUsernameByUserIdQueryVariables>;
export const VideosByUserIdDocument = gql`
    query VideosByUserId($userById: String) {
  userById(id: $userById) {
    username
    id
    videos {
      id
      title
      videoUrl
      author
      authorUrl
      thumbnailUrl
      inTrash
      tags {
        color
        id
        name
      }
    }
  }
}
    `;

/**
 * __useVideosByUserIdQuery__
 *
 * To run a query within a React component, call `useVideosByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useVideosByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVideosByUserIdQuery({
 *   variables: {
 *      userById: // value for 'userById'
 *   },
 * });
 */
export function useVideosByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<VideosByUserIdQuery, VideosByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VideosByUserIdQuery, VideosByUserIdQueryVariables>(VideosByUserIdDocument, options);
      }
export function useVideosByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VideosByUserIdQuery, VideosByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VideosByUserIdQuery, VideosByUserIdQueryVariables>(VideosByUserIdDocument, options);
        }
export type VideosByUserIdQueryHookResult = ReturnType<typeof useVideosByUserIdQuery>;
export type VideosByUserIdLazyQueryHookResult = ReturnType<typeof useVideosByUserIdLazyQuery>;
export type VideosByUserIdQueryResult = Apollo.QueryResult<VideosByUserIdQuery, VideosByUserIdQueryVariables>;
export const UserTagsByUserIdDocument = gql`
    query UserTagsByUserId($userById: String) {
  userById(id: $userById) {
    username
    id
    tags {
      color
      id
      name
    }
  }
}
    `;

/**
 * __useUserTagsByUserIdQuery__
 *
 * To run a query within a React component, call `useUserTagsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserTagsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserTagsByUserIdQuery({
 *   variables: {
 *      userById: // value for 'userById'
 *   },
 * });
 */
export function useUserTagsByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<UserTagsByUserIdQuery, UserTagsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserTagsByUserIdQuery, UserTagsByUserIdQueryVariables>(UserTagsByUserIdDocument, options);
      }
export function useUserTagsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserTagsByUserIdQuery, UserTagsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserTagsByUserIdQuery, UserTagsByUserIdQueryVariables>(UserTagsByUserIdDocument, options);
        }
export type UserTagsByUserIdQueryHookResult = ReturnType<typeof useUserTagsByUserIdQuery>;
export type UserTagsByUserIdLazyQueryHookResult = ReturnType<typeof useUserTagsByUserIdLazyQuery>;
export type UserTagsByUserIdQueryResult = Apollo.QueryResult<UserTagsByUserIdQuery, UserTagsByUserIdQueryVariables>;
export const UserPlaylistsByUserIdDocument = gql`
    query UserPlaylistsByUserId($userById: String) {
  userById(id: $userById) {
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
    `;

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
 *      userById: // value for 'userById'
 *   },
 * });
 */
export function useUserPlaylistsByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<UserPlaylistsByUserIdQuery, UserPlaylistsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPlaylistsByUserIdQuery, UserPlaylistsByUserIdQueryVariables>(UserPlaylistsByUserIdDocument, options);
      }
export function useUserPlaylistsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPlaylistsByUserIdQuery, UserPlaylistsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPlaylistsByUserIdQuery, UserPlaylistsByUserIdQueryVariables>(UserPlaylistsByUserIdDocument, options);
        }
export type UserPlaylistsByUserIdQueryHookResult = ReturnType<typeof useUserPlaylistsByUserIdQuery>;
export type UserPlaylistsByUserIdLazyQueryHookResult = ReturnType<typeof useUserPlaylistsByUserIdLazyQuery>;
export type UserPlaylistsByUserIdQueryResult = Apollo.QueryResult<UserPlaylistsByUserIdQuery, UserPlaylistsByUserIdQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput) {
  createUser(input: $input) {
    username
    password
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

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
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateVideoDocument = gql`
    mutation CreateVideo($input: CreateVideoInput) {
  createVideo(input: $input) {
    id
  }
}
    `;
export type CreateVideoMutationFn = Apollo.MutationFunction<CreateVideoMutation, CreateVideoMutationVariables>;

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
export function useCreateVideoMutation(baseOptions?: Apollo.MutationHookOptions<CreateVideoMutation, CreateVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVideoMutation, CreateVideoMutationVariables>(CreateVideoDocument, options);
      }
export type CreateVideoMutationHookResult = ReturnType<typeof useCreateVideoMutation>;
export type CreateVideoMutationResult = Apollo.MutationResult<CreateVideoMutation>;
export type CreateVideoMutationOptions = Apollo.BaseMutationOptions<CreateVideoMutation, CreateVideoMutationVariables>;