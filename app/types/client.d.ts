import { Post, User, Group, Comment } from "@prisma/client";
type ClientPost = Post & {
  group: null | { id: string; name: string };
  comments: Comment[];
  _count: { likes: number };
};

export interface PostClientType {
  postData: ClientPost;
  currentUser: SafeUser2 | null;
}
