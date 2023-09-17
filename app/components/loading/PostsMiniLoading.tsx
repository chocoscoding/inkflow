import React from "react";
import OneLodingMiniPost from "./OneMiniPost";

const PostsMiniLoading = ({ amount }: { amount?: number }) => {
  return (
    <>
      {Array(amount || 3)
        .fill(0)
        .map((e, i) => (
          <OneLodingMiniPost key={"loadingPost" + i} />
        ))}
    </>
  );
};

export default PostsMiniLoading;
