import getComments from "@/app/actions/getComments";
import PostFuntions from "../../../components/PostFuntions";
import CreatorInfo from "./CreatorInfo";
import PostClient from "./PostClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getOnePost from "@/app/actions/getOnePost";
interface PostPageType {
  params: {
    id: string;
  };
}
const PostPage = async ({ params }: PostPageType) => {
  const currentUser = await getCurrentUser([]);
  const post = await getOnePost(params);
  const comments = await getComments(params);
  console.log(post);

  if (!post)
    return (
      <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
        <h1>No post found</h1>
      </div>
    );
  return (
    <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
      <PostFuntions extraClass="md1:hidden sticky top-[55px]" />
      <PostClient
        postData={post}
        comments={comments}
        currentUser={currentUser}
      />
      <span className="lg3:hidden">
        <CreatorInfo />
      </span>
    </div>
  );
};

export default PostPage;
