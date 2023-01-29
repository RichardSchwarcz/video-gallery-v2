import { GraphQLResolveInfo } from 'graphql';
import { User as UserModel } from '@prisma/client';
import { IPrismaContext } from '../prisma/IPrismaContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  tags: Array<Maybe<Tag>>;
  userById?: Maybe<User>;
  users: Array<Maybe<User>>;
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
  url?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateTagInput: CreateTagInput;
  CreateUserInput: CreateUserInput;
  CreateVideoInput: CreateVideoInput;
  DeleteTagInput: DeleteTagInput;
  DeleteVideoInput: DeleteVideoInput;
  Mutation: ResolverTypeWrapper<{}>;
  Playlist: ResolverTypeWrapper<Playlist>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Tag: ResolverTypeWrapper<Tag>;
  UpdateTagInput: UpdateTagInput;
  UpdateVideoTagsInput: UpdateVideoTagsInput;
  UpdateVideoTrashStatusInput: UpdateVideoTrashStatusInput;
  User: ResolverTypeWrapper<UserModel>;
  Video: ResolverTypeWrapper<Video>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreateTagInput: CreateTagInput;
  CreateUserInput: CreateUserInput;
  CreateVideoInput: CreateVideoInput;
  DeleteTagInput: DeleteTagInput;
  DeleteVideoInput: DeleteVideoInput;
  Mutation: {};
  Playlist: Playlist;
  Query: {};
  String: Scalars['String'];
  Tag: Tag;
  UpdateTagInput: UpdateTagInput;
  UpdateVideoTagsInput: UpdateVideoTagsInput;
  UpdateVideoTrashStatusInput: UpdateVideoTrashStatusInput;
  User: UserModel;
  Video: Video;
}>;

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, Partial<MutationCreateTagArgs>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<MutationCreateUserArgs>>;
  createVideo?: Resolver<ResolversTypes['Video'], ParentType, ContextType, Partial<MutationCreateVideoArgs>>;
  deleteTag?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationDeleteTagArgs>>;
  deleteVideo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationDeleteVideoArgs>>;
  updateTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, Partial<MutationUpdateTagArgs>>;
  updateVideoTags?: Resolver<ResolversTypes['Video'], ParentType, ContextType, Partial<MutationUpdateVideoTagsArgs>>;
  updateVideoTrashStatus?: Resolver<ResolversTypes['Video'], ParentType, ContextType, Partial<MutationUpdateVideoTrashStatusArgs>>;
}>;

export type PlaylistResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Playlist'] = ResolversParentTypes['Playlist']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Video']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  playlists?: Resolver<Array<Maybe<ResolversTypes['Playlist']>>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserByIdArgs>>;
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playlists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Playlist']>>>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Video']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VideoResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Video'] = ResolversParentTypes['Video']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inTrash?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Playlist?: PlaylistResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Video?: VideoResolvers<ContextType>;
}>;

