import { Post, User, Group, Comment, Replies, Likes, Interview, Meetup, Follow } from "@prisma/client";
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
  occupation?: string | null;
  posts?: OwnerPost[];
};
type ContentExtension = {
  group: null | { id: string; name: string };
  _count: { likes: number; comments: number };
  owner: PostOwner;
};
interface CreatorInfoType extends PostOwner {
  showMorePosts?: boolean;
}
interface OneCommentType extends Comment {
  _count: { likes: number };
  replies: Replies[];
  likes: Likes[];
  user: MiniUser | null;
}

interface PostClientType {
  postData: Post & ContentExtension;
  comments: CursorPaginativeReturnType<OneCommentType[]>;
  likeStatus: { id: string } | null;
}
interface CreateCommentType {
  contentId?: string;
  contentType: "Post" | "Interview";
}

interface InterviewClientType extends Omit<PostClientType, "postData"> {
  InterviewData: Interview & ContentExtension;
}
interface CommentFunctionType {
  _count: { likes: number };
  showReply: boolean;
  setShowReply: Dispatch<SetStateAction<boolean>>;
  likeStatus: Likes[];
  referenceId?: string;
  userId?: string;
  replies: Replies[];
}
interface CommentType extends CreateCommentType {
  comments: OneCommentType[] | null;
}

interface PostFunctionsType {
  functionType?: "Interviews" | "Post";
  extraClass: string;
  referenceId?: string;
  likeStatus: { id: string } | null;
  _count?: { likes: number; comments: number };
}

interface CreatorInfo {
  owner: string;
}

interface ContentControlType {
  contentType: "post" | "meetup" | "interview";
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
interface OnePost {
  posts: CursorPaginativeReturnType<OnePostMain[]>;
  followingPost: CursorPaginativeReturnType<OnePostMain[]>;
}

type OnePostComponentType = OnePostMain;

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
interface NewCreationFormType {
  title: string;
  content: string;
  tags: string[];
  group: GroupType | null;
  coverImage: string | null;
  creationType: NewCreationTypes;
  interviewInfo: {
    revenue: string;
    businessType: string;
    platform: string;
  } | null;
  meetupInfo: {
    location: string;
    date: Date;
    time: string;
  } | null;
}
type NewCreationTypes = "Post" | "Interview" | "Meetup";

type CreateClientType = {
  guf: GroupUserFollow[] | null;
};

type EditClientType = {
  guf: GroupUserFollow[] | null;
  contentType: NewCreationTypes;
  data: {
    id: string;
    title: string;
    body: string;
    coverImage: string | null;
    tags: string[];
    userId: string;
    group: GroupType | null;
    revenue?: string;
    businessType?: string;
    platform?: string;
    date?: string | Date;
    time?: string;
  };
};

type PostFieldType = CreateClientType & {
  editing?: boolean;
};

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
  Posts: CursorPaginativeReturnType<OnePostComponentType[]>;
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

type OneInterviewsType = {
  id: string;
  createdAt: Date;
  title: string;
  coverImage: string | null;
  revenue: string;
  businessType: string;
  platform: string;
  owner: {
    id: string;
    image: string | null;
    username: string | null;
  };
};

type OneMeetupType = Meetup & {
  owner: {
    id: string;
    image: string | null;
    username: string | null;
  };
};
type OneMiniMeetup = Pick<Meetup, "id" | "title" | "date" | "tags">;

interface InterviewClientTopType
  extends Pick<
    InterviewClientType["InterviewData"],
    "group" | "owner" | "coverImage" | "title" | "platform" | "createdAt" | "businessType" | "revenue" | "body"
  > {}

type MiniUser = {
  usernames: string;
  id: string;
  image: string | null;
};
interface FollowerType {
  followerUser: MiniUser | null;
}
interface FollowingType {
  followingUser: MiniUser | null;
}

type ProfileMiniType = Pick<User, "bio" | "id" | "image" | "createdAt" | "username" | "occupation" | "socailLink">;
type ProfileMiniTypeForm = Pick<User, "bio" | "id" | "image" | "createdAt" | "username" | "occupation"> & {
  website: string | null;
  instagram: string | null;
  linkedin: string | null;
  x: string | null;
};
interface UserInfoClient {
  followersCount: number;
  followingCount: number;
  userFollowingUserStatus: boolean | null;
  profile: ProfileMiniType;
  followingList?: FollowingType[] | null;
  followersList?: FollowerType[] | null;
}
interface ProfileClientType {
  Posts: PagePaginativeReturnType<OnePostMain[]>;
  Interviews: PagePaginativeReturnType<OneInterviewsType[]>;
  Meetups: PagePaginativeReturnType<OneMeetupType[]>;
}

interface FollowActionType {
  userId?: string;
  id: string;
  userFollowingProfileUser: boolean | null;
}

interface SecurityClient {
  userHasPassword: boolean;
}
interface SecurityClientForm {
  oldPass?: string;
  newPass: string;
  confirmNew: string;
}

interface MeetupClientType extends Meetup {
  group: GroupType | null;
  owner: PostOwner;
}

type CursorPaginativeReturnType<K> = {
  data: K;
  metaData: {
    newCursor: string | null;
    hasMore: boolean;
  } | null;
  error?: boolean;
};
type PagePaginativeReturnType<K> = {
  data: K;
  page: number;
  error?: boolean;
};
