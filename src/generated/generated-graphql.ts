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
  userVideos?: Maybe<User>;
};


export type QueryUserByIdArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryUserVideosArgs = {
  input?: InputMaybe<UserVideosInput>;
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

export type UserVideosInput = {
  inTrash: Scalars['Boolean'];
  userId: Scalars['String'];
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

export type UsernameByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;


export type UsernameByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null } | null };

export type UserVideosQueryVariables = Exact<{
  input?: InputMaybe<UserVideosInput>;
}>;


export type UserVideosQuery = { __typename?: 'Query', userVideos?: { __typename?: 'User', id?: string | null, username?: string | null, videos?: Array<{ __typename?: 'Video', id?: string | null, authorUrl?: string | null, author?: string | null, inTrash?: boolean | null, title?: string | null, videoUrl?: string | null, thumbnailUrl?: string | null, tags?: Array<{ __typename?: 'Tag', id?: string | null, name?: string | null, color?: string | null } | null> | null } | null> | null } | null };

export type UserTagsByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;


export type UserTagsByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null, tags?: Array<{ __typename?: 'Tag', color?: string | null, id?: string | null, name?: string | null } | null> | null } | null };

export type UserPlaylistsByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
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

export type UpdateVideoTrashStatusMutationVariables = Exact<{
  input?: InputMaybe<UpdateVideoTrashStatusInput>;
}>;


export type UpdateVideoTrashStatusMutation = { __typename?: 'Mutation', updateVideoTrashStatus: { __typename?: 'Video', inTrash?: boolean | null } };


export const UsernameByUserIdDocument = gql`
    query UsernameByUserId($userId: String) {
  userById(userId: $userId) {
    username
    id
  }
}
    `;

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
export function useUsernameByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<UsernameByUserIdQuery, UsernameByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsernameByUserIdQuery, UsernameByUserIdQueryVariables>(UsernameByUserIdDocument, options);
      }
export function useUsernameByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsernameByUserIdQuery, UsernameByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsernameByUserIdQuery, UsernameByUserIdQueryVariables>(UsernameByUserIdDocument, options);
        }
export type UsernameByUserIdQueryHookResult = ReturnType<typeof useUsernameByUserIdQuery>;
export type UsernameByUserIdLazyQueryHookResult = ReturnType<typeof useUsernameByUserIdLazyQuery>;
export type UsernameByUserIdQueryResult = Apollo.QueryResult<UsernameByUserIdQuery, UsernameByUserIdQueryVariables>;
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
    `;

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
export function useUserVideosQuery(baseOptions?: Apollo.QueryHookOptions<UserVideosQuery, UserVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserVideosQuery, UserVideosQueryVariables>(UserVideosDocument, options);
      }
export function useUserVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserVideosQuery, UserVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserVideosQuery, UserVideosQueryVariables>(UserVideosDocument, options);
        }
export type UserVideosQueryHookResult = ReturnType<typeof useUserVideosQuery>;
export type UserVideosLazyQueryHookResult = ReturnType<typeof useUserVideosLazyQuery>;
export type UserVideosQueryResult = Apollo.QueryResult<UserVideosQuery, UserVideosQueryVariables>;
export const UserTagsByUserIdDocument = gql`
    query UserTagsByUserId($userId: String) {
  userById(userId: $userId) {
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
 *      userId: // value for 'userId'
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
 *      userId: // value for 'userId'
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
export const UpdateVideoTrashStatusDocument = gql`
    mutation UpdateVideoTrashStatus($input: UpdateVideoTrashStatusInput) {
  updateVideoTrashStatus(input: $input) {
    inTrash
  }
}
    `;
export type UpdateVideoTrashStatusMutationFn = Apollo.MutationFunction<UpdateVideoTrashStatusMutation, UpdateVideoTrashStatusMutationVariables>;

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
export function useUpdateVideoTrashStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVideoTrashStatusMutation, UpdateVideoTrashStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVideoTrashStatusMutation, UpdateVideoTrashStatusMutationVariables>(UpdateVideoTrashStatusDocument, options);
      }
export type UpdateVideoTrashStatusMutationHookResult = ReturnType<typeof useUpdateVideoTrashStatusMutation>;
export type UpdateVideoTrashStatusMutationResult = Apollo.MutationResult<UpdateVideoTrashStatusMutation>;
export type UpdateVideoTrashStatusMutationOptions = Apollo.BaseMutationOptions<UpdateVideoTrashStatusMutation, UpdateVideoTrashStatusMutationVariables>;