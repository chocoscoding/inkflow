import { Post, User, Group, Comment, Replies } from "@prisma/client";
type ClientPost = Post & {
  group: null | { id: string; name: string };
  _count: { likes: number };
};

export interface OneCommentType extends Comment {
  _count: { likes: number };
  replies: Replies[];
}

export interface PostClientType {
  postData: ClientPost;
  currentUser: SafeUser2 | null;
  comments: OneCommentType[] | null;
}
export interface CreateCommentType {
  postId?: string;
  userId: string;
}
export interface CommentType extends CreateCommentType {
  comments: OneCommentType[] | null;
}
