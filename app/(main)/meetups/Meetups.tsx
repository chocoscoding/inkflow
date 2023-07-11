import Ripple from "@/app/components/Ripple";
import Tags from "@/app/components/Tags";
import Image from "next/image";
import React, { Suspense } from "react";
interface MeetupTypes {}
const Meetups: React.FC<MeetupTypes> = ({}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" bg-dark-30 rounded-xl w-full p-2.5 sm1:p-1.5 flex-grow-0">
        <div className="flex gap-2 w-full sm1:flex-wrap">
          <div
            className="rounded-md overflow-hidden w-[85px] h-[85px] sm1:w-full sm1:h-[200px]
           shrink-0 object-cover">
            <Image
              src={
                "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              }
              width={500}
              height={500}
              alt="post-Image"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <span className="flex w-full gap-1">
            <section className="w-full">
              <p className="lg:truncate-lines-1 truncate-lines-2 w-full md:text-lg md:font-semibold">
                UIHUT - Crunchbase Company Profile & Funding
              </p>
              <p className=" text-xs text-secondary-30 md:text-sm">
                UIHUT <span></span> <span>Sylhet, Bangladesh</span>
              </p>
            </section>
            <div className="rounded-md flex flex-col items-center h-[4.3rem] lg1:h-[4rem] px-2 shadow-md dark:shadow-dark-10 shrink-0 ml-2">
              <p className="mt-2">FEB</p>
              <p className="text-blue-80 font-extrabold text-2xl lg1:text-xl">7</p>
            </div>
          </span>
        </div>
        <p className="w-full truncate-lines-4 my-2 text-sm sm1:xs">
          Dribbble Meetups are a chance for designers to socialize, talk shop, and foster their local design communities. They are
          self-organized events that range from the casual, five-person, coffee-shop roundtable to the chef-catered, bar-tended, 200-person
          extravaganzaDribbble Meetups are a chance for designers to socialize, talk shop, and foster their local design communities. They
          are self-organized events that range from the casual, five-person, coffee-shop roundtable to the chef-catered, bar-tended,
          200-person extravaganza
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
          <Ripple className="bg-dark-10">
            <Tags
              label="Sustainability"
              classname="text-xs sm1:text-xss text-secondary-50 py-1.5 hover:underline cursor-pointer"
            />
          </Ripple>
        </div>
      </div>
    </Suspense>
  );
};

export default Meetups;
