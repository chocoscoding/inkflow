import { Post, User, Group, Comment, Replies, Likes } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
type OwnerPost = {
  id: string;
  title: string;
  tags: string[];
};
type PostOwnerMain = {
  id: string;
  image: string | null;
  username: string | null;
};

type PostOwner = {
  image?: string | null;
  id?: string;
  username?: string | null;
  occupation?: string;
  posts?: OwnerPost[];
};
export type ClientPost = Post & {
  group: null | { id: string; name: string };
  _count: { likes: number; comments: number };
  owner: PostOwner;
};
export interface CreatorInfoType extends PostOwner {}
export interface OneCommentType extends Comment {
  _count: { likes: number };
  replies: Replies[];
  likes: Likes[];
  user: { username: string | null; id: string; image: string | null } | null;
}

export interface PostClientType {
  postData: ClientPost;
  currentUser: SafeUser2 | null;
  comments: OneCommentType[];
  likeStatus: { id: string } | null;
}
export interface CreateCommentType {
  postId?: string;
}
export interface CommentFunctionType {
  _count: { likes: number };
  showReply: boolean;
  setShowReply: Dispatch<SetStateAction<boolean>>;
  likeStatus: Likes[];
  referenceId?: string;
  userId?: string;
  replies: Replies[];
}
export interface CommentType extends CreateCommentType {
  comments: OneCommentType[] | null;
}

export interface PostFunctionsType {
  extraClass: string;
  referenceId?: string;
  userId?: string;
  likeStatus: { id: string } | null;
  _count?: { likes: number; comments: number };
}

export interface CreatorInfo {
  owner: string;
}

export interface ContentControlType {
  editLink: string;
  contentType: "Post" | "Meetup" | "Interview";
  contentId: string;
}
type OnePostMain = {
  likes?: { userId: string }[];
  owner: { id: string; image: string | null; username: string | null };
  _count: { likes: number; comments: number };
  title: string;
  tags: string[];
  coverImage: string | null;
  createdAt: Date;
  views: number;
  id: string;
};
export interface OnePost {
  posts: OnePostMain[];
}

export type OnePostComponentType = OnePostMain;

type GroupUserFollow = {
  id: string;
  coverPhoto: string;
  name: string;
};

export type CreateClientType = {
  guf: GroupUserFollow[] | null;
};

type PostFieldType = CreateClientType & {}