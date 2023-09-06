import getComments from "@/app/actions/getComments";
import PostFuntions from "../../../components/PostFuntions";
import CreatorInfo from "./CreatorInfo";
import PostClient from "./PostClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getOnePost from "@/app/actions/getOnePost";
import getHasUserLiked from "@/app/actions/getHasUserLiked";
import { Metadata, ResolvingMetadata } from "next";
import ContentControl from "@/app/components/ContentControl";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
interface PostPageType {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostPageType): Promise<Metadata> {
  const post = await getOnePost(params);
  if (!post)
    return {
      title: "No post found",
      description: `Couldn't find the post you're trying to get`,
    };
  return {
    title: post.title,
  };
}

const PostPage = async ({ params }: PostPageType) => {
  const post =await getOnePost(params);
  const userPromise = getServerSession(authOptions);
  const commentsPromise = getComments({ id: post?.id, contentType: 'Post' });
  const postLikeStatus = getHasUserLiked({ id: post?.id });

  const [comments, likeStatus,userSession] = await Promise.all([commentsPromise, postLikeStatus, userPromise]);

  if (!post)
    return (
      <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
        <h1>No post found</h1>
      </div>
    );
  return (
    <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
      <PostFuntions
        extraClass="md1:hidden sticky top-[55px]"
        referenceId={post?.id}
        likeStatus={likeStatus}
        _count={post._count}
      />
      <PostClient
        comments={comments}
        postData={post}
        likeStatus={likeStatus}
      />
      <span className="lg3:hidden">
      {userSession?.user.id === post.owner.id ? (
        <ContentControl
          contentType="post"
          contentId={"1"}
        />
      ) : (
        <CreatorInfo {...post.owner} />
      )}
      </span>
    </div>
  );
};

export default PostPage;
