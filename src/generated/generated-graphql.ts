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
  Date: string;
};

export type Member = {
  __typename?: 'Member';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isStudent?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  memberships?: Maybe<Array<Maybe<Membership>>>;
  telNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Membership = {
  __typename?: 'Membership';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isStudent?: Maybe<Scalars['Boolean']>;
  memberships?: Maybe<Array<Maybe<Membership>>>;
  name?: Maybe<Scalars['String']>;
  telNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  members: Array<Maybe<Member>>;
};

export type MembersQueryVariables = Exact<{ [key: string]: never; }>;


export type MembersQuery = { __typename?: 'Query', members: Array<{ __typename?: 'Member', firstName?: string | null, lastName?: string | null, id?: number | null, address?: string | null, email?: string | null, telNumber?: string | null, isStudent?: boolean | null, createdAt?: string | null, updatedAt?: string | null } | null> };


export const MembersDocument = gql`
    query Members {
  members {
    firstName
    lastName
    id
    address
    email
    telNumber
    isStudent
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMembersQuery__
 *
 * To run a query within a React component, call `useMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMembersQuery(baseOptions?: Apollo.QueryHookOptions<MembersQuery, MembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MembersQuery, MembersQueryVariables>(MembersDocument, options);
      }
export function useMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MembersQuery, MembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MembersQuery, MembersQueryVariables>(MembersDocument, options);
        }
export type MembersQueryHookResult = ReturnType<typeof useMembersQuery>;
export type MembersLazyQueryHookResult = ReturnType<typeof useMembersLazyQuery>;
export type MembersQueryResult = Apollo.QueryResult<MembersQuery, MembersQueryVariables>;