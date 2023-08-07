import Avatar from "@/app/components/Avatar";
import { More, Reply } from "@/app/components/Icons";
import { Like } from "@/app/components/Icons/Icon";
import OneReply from "./OneReply";

const OneComment = () => {
  return (
    <div className="p-1 mb-4">
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
            <p className="text-secondary-30">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo modi dolore quo veritatis in corporis doloremque. Velit sed
              beatae soluta obcaecati accusantium! Esse sunt mollitia sint, magnam tempora consectetur adipisicing elit. Nemo modi dolore
              quo veritatis in corporis doloremque. Velit sed beatae soluta obcaecati beatae soluta obcaecati accusantium! Esse sunt
              mollitia sint, magnam tempora consectetur adipisicing elit. Nemo modi dolore quo veritatis in corporis doloremque. Velit sed
              beatae soluta obcaecati accusantium! Esse sunt mollitia sint, magnam tempora ratione provident!
            </p>
          </div>
          <div className="flex items-center text-secondary-30 py-2 gap-5">
            <div className="flex gap-2 items-center">
              <Like className="cursor-pointer" />
              <p className="text-secondaryBg-20">2k</p>
            </div>
            <Reply className="cursor-pointer" />
            <More className="cursor-pointer" />
          </div>
          <div className="mt-2">
            <OneReply />
            <OneReply />
            <OneReply />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneComment;
