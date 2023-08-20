import getComments from "@/app/actions/getComments";
import PostFuntions from "../../../components/PostFuntions";
import CreatorInfo from "./CreatorInfo";
import PostClient from "./PostClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getOnePost from "@/app/actions/getOnePost";
import getHasUserLiked from "@/app/actions/getHasUserLiked";
interface PostPageType {
  params: {
    id: string;
  };
}
const PostPage = async ({ params }: PostPageType) => {

  const currentUserPromise = getCurrentUser([]);
  const postPromise = getOnePost(params);

  const [currentUser, post] = await Promise.all([currentUserPromise, postPromise]);
  const commentsPromise = getComments({id:post?.id});
  const postLikeStatus = getHasUserLiked({id:post?.id});

  const [comments, likeStatus] = await Promise.all([commentsPromise, postLikeStatus]);

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
        userId={currentUser?.id}
        likeStatus={likeStatus}
        _count={post._count}
      />
      <PostClient
        comments={comments}
        postData={post}
        currentUser={currentUser}
        likeStatus={likeStatus}
      />
      <span className="lg3:hidden">
        <CreatorInfo {...post.owner}/>
      </span>
    </div>
  );
};

export default PostPage;
