"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Like } from "../Icons/Icon";
import Tags from "../Tags";
import Avatar from "../Avatar";
import Link from "next/link";

const Post = () => {
  const [like, setLike] = useState<boolean>(false);
  return (
    <div className="bg-dark-30 lg:h-56 h-fit w-full mb-4 rounded-xl flex p-4 md1:p-2 sm1:p-3 md:gap-4 gap-2 sm1:overflow-hidden sm1:flex-col">
      <div className="rounded-lg overflow-hidden  xl:w-[200px]  md:w-[150px] sm:w-[130px] sm1:w-full sm1:h-60 w-1/5 shrink-0">
        <Image
          src={
            "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          }
          width={500}
          height={500}
          alt="post-Image"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between">
        {/* top */}
        <section>
          <div className="flex gap-10 lg2:gap-3">
            <Link href={`/post/1234`}>
              <p className="xl:text-xl lg:text-base text-sm font-semibold truncate-lines-2 hover:underline cursor-pointer">
                This is my favorite title and i dont give to free noting about why life is made up of nothing or why people eat sweet things
                aha or why people love good things
              </p>
            </Link>
            <div className="h-fit p-1.5 bg-dark-40 rounded-full cursor-pointer hidden sm:block">
              <Like className={`text-secondary-50`} />
            </div>
            <Avatar className="rounded-full h-fit block sm:hidden" />
          </div>
          {/* tags */}
          <div className="w-full flex gap-3 lg1:gap-1.5 mt-5 lg1:mt-4 lg1:mb-1 overflow-x-auto scrollbar-none flex-wrap">
            <Tags
              label="Enterprenureship"
              classname="text-xss xl:text-xs text-secondary-50 py-1.5 sm1:p-1 hover:underline cursor-pointer"
            />
            <Tags
              label="International"
              classname="text-xss xl:text-xs text-secondary-50 py-1.5 hover:underline cursor-pointer"
            />
            <Tags
              label="Sustainability"
              classname="text-xss xl:text-xs text-secondary-50 py-1.5 hover:underline cursor-pointer"
            />
          </div>
        </section>
        {/* user and post info */}
        <section className="flex justify-between items-center lg1:flex-col lg1:items-start lg1:gap-2 flex-wrap gap-4">
          {/* user */}
          <div className="sm:flex hidden gap-1">
            <Avatar className="rounded-full" />
            <div className="flex flex-col justify-between ">
              <p className="text-sm text-secondary-60">
                Timileyinwandff <span className="inline-flex align-middle w-1 h-1 rounded-full bg-secondary-50"></span>
              </p>
              <p className="text-xss text-secondary-50">59 seconds ago</p>
            </div>
          </div>
          {/* post info */}
          <div className="flex text-xs md1:text-xss gap-4 text-secondary-50 sm1:mt-3 sm1:text-xss">
            <p className="flex gap-1 ">
              102,420 <span>Views</span>
            </p>
            <p className="flex gap-1">
              22,900 <span>Likes</span>
            </p>
            <p className="flex gap-1">
              7,350 <span>Comments</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
