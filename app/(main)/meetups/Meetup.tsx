import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import { OneMeetupType } from "@/app/types/client";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Meetup: FC<OneMeetupType> = (props) => {
  const { id,title, body, coverImage, time, date } = props;
  return (
    <div className=" bg-dark-30 rounded-xl w-full p-2.5 sm1:p-1.5 flex-grow-0">
      <div className="flex gap-2 w-full sm1:flex-wrap">
        <div
          className="rounded-md overflow-hidden w-[100px] h-[100px] sm1:w-full sm1:h-[200px]
       shrink-0 object-cover">
          <Image
            src={coverImage || "/images/placeholder.jpg"}
            width={500}
            height={500}
            alt="post-Image"
            className="rounded-lg w-full h-auto aspect-square"
          />
        </div>
        <span className="flex w-full gap-1">
          <section className="w-full">
            <Link href={"/meetups/"+title}>
              <p className="lg:truncate-lines-1 truncate-lines-2 w-full md:text-lg md:font-semibold">{title}</p>
            </Link>
            <p className=" text-xs text-secondary-30 md:text-sm">
              🌍REMOTE
            </p>
            <div className="w-full flex gap-3 lg1:gap-1.5 mt-4 lg1:mt-3 lg1:mb-1 overflow-x-auto scrollbar-none flex-wrap">
              <Ripple backgroundColor="#ffffff26">
                <Tags
                  label="Enterprenureship"
                  classname="text-xs sm1:text-xss text-secondary-50 py-1.5 sm1:p-1 hover:underline cursor-pointer"
                />
              </Ripple>
              <Ripple>
                <Tags
                  label="International"
                  classname="text-xs sm1:text-xss text-secondary-50 py-1.5 hover:underline cursor-pointer"
                />
              </Ripple>
              <Ripple rippleClassName="bg-dark-10">
                <Tags
                  label="Sustainability"
                  classname="text-xs sm1:text-xss text-secondary-50 py-1.5 hover:underline cursor-pointer"
                />
              </Ripple>
            </div>
          </section>
          <div className="rounded-md flex flex-col items-center h-[4.3rem] lg1:h-[4rem] px-2 shadow-md dark:shadow-dark-10 shrink-0 ml-2">
            <p className="mt-2">FEB</p>
            <p className="text-blue-80 font-extrabold text-2xl lg1:text-xl">7</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Meetup;
