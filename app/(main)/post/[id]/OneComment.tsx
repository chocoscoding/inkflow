import Avatar from "@/app/components/Avatar";
import { More, Reply } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import OneReply from "./OneReply";
import { OneCommentType } from "@/app/types/client";
import { FC, useState } from "react";

const OneComment: FC<OneCommentType> = (props) => {
  const { id, userId, referenceId, body, _count, replies } = props;
  const [showReply, setShowReply] = useState(false);
  return (
    <div className="p-1 mb-1.5">
      <div className="flex gap-3 h-fit">
        <Avatar
          size={42}
          className="rounded-full flex-shrink-0 h-fit"
        />
        <div className="w-full">
          <div className="w-full outline outline-1 outline-secondary-50 p-2 rounded-xl mb-1.5">
            <div className="flex items-center gap-2 mt-1 mb-2">
              <p className="font-medium">timileyinwandfff</p>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <p className=" text-xs font-thin">10 days ago</p>
            </div>
            <p className="text-secondary-30">{body}</p>
          </div>
          <div className="flex items-center text-secondary-30 py-2 gap-5 justify-between">
            <div className="flex gap-6">
              <div className="flex gap-2 items-center">
                <Like className="cursor-pointer" />
                <p className="text-secondaryBg-20">{_count.likes}</p>
              </div>
              <Reply className="cursor-pointer" />
              <More className="cursor-pointer" />
            </div>
            {replies.length > 0 ? (
              <p
                className="p-1 bg-dark-40 cursor-pointer rounded-md"
                onClick={() => setShowReply(!showReply)}>{`${showReply ? "Hide" : "Show"} replies`}</p>
            ) : null}
          </div>
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
