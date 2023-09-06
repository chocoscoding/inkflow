"use client";
import Avatar from "@/app/components/Avatar";
import { More, Reply } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import OneReply from "./OneReply";
import { OneCommentType } from "@/app/types/client";
import { FC, useState } from "react";
import CommentFunctions from "./CommentFunctions";
import TimeAgo from "react-timeago";

const OneComment: FC<OneCommentType> = (props) => {
  const { id, userId, referenceId, body, _count, replies, likes: likeStatus, user, createdAt } = props;
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="p-1 mb-1.5">
      <div className="flex gap-3 h-fit">
        <Avatar
          size={42}
          src={user?.image}
          className="rounded-full flex-shrink-0 h-fit"
        />
        <div className="w-full">
          <div className="w-full outline outline-1 outline-secondary-50 p-2 rounded-xl mb-1.5">
            <div className="flex items-center gap-2 mt-1 mb-2">
              <p className="font-medium">{user?.username}</p>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <p className=" text-xs font-thin">
                <TimeAgo date={createdAt} />
              </p>
            </div>
            <p className="text-secondary-30">{body}</p>
          </div>
          <CommentFunctions
            _count={_count}
            showReply={showReply}
            setShowReply={setShowReply}
            likeStatus={likeStatus}
            userId={userId}
            referenceId={id}
            replies={replies}
          />
          <div className={`mt-2 overflow-hidden transition-all ${showReply ? "" : "h-0"}`}>
            {replies.map((reply, i) => (
              <OneReply key={`replies__${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneComment;
