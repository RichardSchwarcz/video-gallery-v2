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
  title: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
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
  updateVideo: Video;
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


export type MutationUpdateVideoArgs = {
  input?: InputMaybe<UpdateVideoInput>;
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
  tags: Array<Maybe<Tag>>;
  userById?: Maybe<User>;
  users: Array<Maybe<User>>;
  videos: Array<Maybe<Video>>;
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

export type UpdateVideoInput = {
  id: Scalars['String'];
  tagsId: Scalars['String'];
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
  id?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username?: string | null, videos?: Array<{ __typename?: 'Video', title?: string | null, url?: string | null, tags?: Array<{ __typename?: 'Tag', name?: string | null, color?: string | null } | null> | null } | null> | null } | null> };

export type QueryUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryUserDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username?: string | null, password?: string | null, id?: string | null } | null> };

export type QueryUsernameByUserIdQueryVariables = Exact<{
  userById?: InputMaybe<Scalars['String']>;
}>;


export type QueryUsernameByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null } | null };

export type QueryUserVideosByUserIdQueryVariables = Exact<{
  userById?: InputMaybe<Scalars['String']>;
}>;


export type QueryUserVideosByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null, videos?: Array<{ __typename?: 'Video', id?: string | null, title?: string | null, url?: string | null, tags?: Array<{ __typename?: 'Tag', color?: string | null, id?: string | null, name?: string | null } | null> | null } | null> | null } | null };

export type QueryUserTagsByUserIdQueryVariables = Exact<{
  userById?: InputMaybe<Scalars['String']>;
}>;


export type QueryUserTagsByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null, tags?: Array<{ __typename?: 'Tag', color?: string | null, id?: string | null, name?: string | null } | null> | null } | null };

export type QueryUserPlaylistsByUserIdQueryVariables = Exact<{
  userById?: InputMaybe<Scalars['String']>;
}>;


export type QueryUserPlaylistsByUserIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, id?: string | null, playlists?: Array<{ __typename?: 'Playlist', id?: string | null, name?: string | null, videos?: Array<{ __typename?: 'Video', id?: string | null } | null> | null } | null> | null } | null };

export type CreateUserMutationVariables = Exact<{
  input?: InputMaybe<CreateUserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username?: string | null, password?: string | null, id?: string | null } };

export type CreateVideoMutationVariables = Exact<{
  input?: InputMaybe<CreateVideoInput>;
}>;


export type CreateVideoMutation = { __typename?: 'Mutation', createVideo: { __typename?: 'Video', id?: string | null } };


export const UsersDocument = gql`
    query Users {
  users {
    username
    videos {
      title
      url
      tags {
        name
        color
      }
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const QueryUserDataDocument = gql`
    query QueryUserData {
  users {
    username
    password
    id
  }
}
    `;

/**
 * __useQueryUserDataQuery__
 *
 * To run a query within a React component, call `useQueryUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryUserDataQuery(baseOptions?: Apollo.QueryHookOptions<QueryUserDataQuery, QueryUserDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserDataQuery, QueryUserDataQueryVariables>(QueryUserDataDocument, options);
      }
export function useQueryUserDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserDataQuery, QueryUserDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserDataQuery, QueryUserDataQueryVariables>(QueryUserDataDocument, options);
        }
export type QueryUserDataQueryHookResult = ReturnType<typeof useQueryUserDataQuery>;
export type QueryUserDataLazyQueryHookResult = ReturnType<typeof useQueryUserDataLazyQuery>;
export type QueryUserDataQueryResult = Apollo.QueryResult<QueryUserDataQuery, QueryUserDataQueryVariables>;
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
export const QueryUserVideosByUserIdDocument = gql`
    query QueryUserVideosByUserId($userById: String) {
  userById(id: $userById) {
    username
    id
    videos {
      id
      title
      url
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
 * __useQueryUserVideosByUserIdQuery__
 *
 * To run a query within a React component, call `useQueryUserVideosByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserVideosByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserVideosByUserIdQuery({
 *   variables: {
 *      userById: // value for 'userById'
 *   },
 * });
 */
export function useQueryUserVideosByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<QueryUserVideosByUserIdQuery, QueryUserVideosByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserVideosByUserIdQuery, QueryUserVideosByUserIdQueryVariables>(QueryUserVideosByUserIdDocument, options);
      }
export function useQueryUserVideosByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserVideosByUserIdQuery, QueryUserVideosByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserVideosByUserIdQuery, QueryUserVideosByUserIdQueryVariables>(QueryUserVideosByUserIdDocument, options);
        }
export type QueryUserVideosByUserIdQueryHookResult = ReturnType<typeof useQueryUserVideosByUserIdQuery>;
export type QueryUserVideosByUserIdLazyQueryHookResult = ReturnType<typeof useQueryUserVideosByUserIdLazyQuery>;
export type QueryUserVideosByUserIdQueryResult = Apollo.QueryResult<QueryUserVideosByUserIdQuery, QueryUserVideosByUserIdQueryVariables>;
export const QueryUserTagsByUserIdDocument = gql`
    query QueryUserTagsByUserId($userById: String) {
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
 * __useQueryUserTagsByUserIdQuery__
 *
 * To run a query within a React component, call `useQueryUserTagsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserTagsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserTagsByUserIdQuery({
 *   variables: {
 *      userById: // value for 'userById'
 *   },
 * });
 */
export function useQueryUserTagsByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<QueryUserTagsByUserIdQuery, QueryUserTagsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserTagsByUserIdQuery, QueryUserTagsByUserIdQueryVariables>(QueryUserTagsByUserIdDocument, options);
      }
export function useQueryUserTagsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserTagsByUserIdQuery, QueryUserTagsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserTagsByUserIdQuery, QueryUserTagsByUserIdQueryVariables>(QueryUserTagsByUserIdDocument, options);
        }
export type QueryUserTagsByUserIdQueryHookResult = ReturnType<typeof useQueryUserTagsByUserIdQuery>;
export type QueryUserTagsByUserIdLazyQueryHookResult = ReturnType<typeof useQueryUserTagsByUserIdLazyQuery>;
export type QueryUserTagsByUserIdQueryResult = Apollo.QueryResult<QueryUserTagsByUserIdQuery, QueryUserTagsByUserIdQueryVariables>;
export const QueryUserPlaylistsByUserIdDocument = gql`
    query QueryUserPlaylistsByUserId($userById: String) {
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
 * __useQueryUserPlaylistsByUserIdQuery__
 *
 * To run a query within a React component, call `useQueryUserPlaylistsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserPlaylistsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserPlaylistsByUserIdQuery({
 *   variables: {
 *      userById: // value for 'userById'
 *   },
 * });
 */
export function useQueryUserPlaylistsByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<QueryUserPlaylistsByUserIdQuery, QueryUserPlaylistsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserPlaylistsByUserIdQuery, QueryUserPlaylistsByUserIdQueryVariables>(QueryUserPlaylistsByUserIdDocument, options);
      }
export function useQueryUserPlaylistsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserPlaylistsByUserIdQuery, QueryUserPlaylistsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserPlaylistsByUserIdQuery, QueryUserPlaylistsByUserIdQueryVariables>(QueryUserPlaylistsByUserIdDocument, options);
        }
export type QueryUserPlaylistsByUserIdQueryHookResult = ReturnType<typeof useQueryUserPlaylistsByUserIdQuery>;
export type QueryUserPlaylistsByUserIdLazyQueryHookResult = ReturnType<typeof useQueryUserPlaylistsByUserIdLazyQuery>;
export type QueryUserPlaylistsByUserIdQueryResult = Apollo.QueryResult<QueryUserPlaylistsByUserIdQuery, QueryUserPlaylistsByUserIdQueryVariables>;
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