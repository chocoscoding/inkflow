import { Post, User, Group, Comment, Replies, Likes } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
type OwnerPost = {
  id: string;
  title: string;
  tags: string[];
};
type MiniUser = {
  id: string;
  image: string | null;
  username: string | null;
};
type PostOwnerMain = MiniUser;

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
  user: MiniUser | null;
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

interface GroupUserFollow {
  group: {
    id: string;
    coverImage: string | null;
    name: string;
    admin: string[];
    _count: {
      members: number;
    };
  };
}
type GroupRequests = {
  group: {
    id: string;
    name: string;
    coverImage: string | null;
    _count: {
      members: number;
    };
  };
};

type CreateClientType = {
  guf: GroupUserFollow[] | null;
};

type PostFieldType = CreateClientType & {};

interface GroupCreationFormType {
  name: string;
  about: string;
  admin: string[];
  coverImage: string;
}

interface GroupsClientType {
  groupRequests: GroupRequests[] | null;
  guf: GroupUserFollow[] | null;
}
type Admininstrators = {
  user: MiniUser;
}[];
type GroupMemberMini = {
  user: { image: string | null };
};
interface OneGroupType {
  id: string;
  name: string;
  about: string;
  coverImage: string | null;
  admininstrators: Admininstrators;
  members: GroupMemberMini[];
  _count: {
    members: number;
  };
  isUserFollowingGroup: string | null;
  Posts: OnePostComponentType[];
}

interface GroupInfoType {
  admininstrators: Admininstrators;
  membersCount: number;
  membersMiniList: GroupMemberMini[];
  isUserFollowingGroup: string | null;
}

type TrendingTags = { name: string; tag_count: number }[] | null;
type GroupMember = {
  user: MiniUser & {
    firstname: string | null;
    lastname: string | null;
  };
};
interface GroupMembers {
  users: GroupMember[];
  groupInfo: {
    id: string;
    admin: string[];
    _count: {
      members: number;
    };
    name: string;
  } | null;
}

interface ListGroupProps extends MiniUser {
  admin: boolean;
  firstname: string | null;
  lastname: string | null;
}

interface OneMember_BannedUser {
  image: string | null;
  id: string;
  username: string | null;
  buttonLabel: string;
  buttonOnClick: () => void;
}
interface BannedClient {
  user: {
    image: string | null;
    id: string;
    username: string | null;
  };
}

interface GroupPageType {
  params: {
    id: string;
  };
}
