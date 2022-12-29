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

export type CreateUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
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
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  url?: Maybe<Scalars['String']>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username?: string | null, videos?: Array<{ __typename?: 'Video', name?: string | null, url?: string | null, tags?: Array<{ __typename?: 'Tag', name?: string | null, color?: string | null } | null> | null } | null> | null } | null> };

export type QueryUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryUserDataQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', username?: string | null, password?: string | null, id?: string | null } | null> };

export type QueryUserByIdQueryVariables = Exact<{
  userByIdId?: InputMaybe<Scalars['String']>;
}>;


export type QueryUserByIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', username?: string | null, password?: string | null, id?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  input?: InputMaybe<CreateUserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', username?: string | null, password?: string | null, id?: string | null } | null };


export const UsersDocument = gql`
    query Users {
  users {
    username
    videos {
      name
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
export const QueryUserByIdDocument = gql`
    query QueryUserById($userByIdId: String) {
  userById(id: $userByIdId) {
    username
    password
    id
  }
}
    `;

/**
 * __useQueryUserByIdQuery__
 *
 * To run a query within a React component, call `useQueryUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryUserByIdQuery({
 *   variables: {
 *      userByIdId: // value for 'userByIdId'
 *   },
 * });
 */
export function useQueryUserByIdQuery(baseOptions?: Apollo.QueryHookOptions<QueryUserByIdQuery, QueryUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryUserByIdQuery, QueryUserByIdQueryVariables>(QueryUserByIdDocument, options);
      }
export function useQueryUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryUserByIdQuery, QueryUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryUserByIdQuery, QueryUserByIdQueryVariables>(QueryUserByIdDocument, options);
        }
export type QueryUserByIdQueryHookResult = ReturnType<typeof useQueryUserByIdQuery>;
export type QueryUserByIdLazyQueryHookResult = ReturnType<typeof useQueryUserByIdLazyQuery>;
export type QueryUserByIdQueryResult = Apollo.QueryResult<QueryUserByIdQuery, QueryUserByIdQueryVariables>;
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