import Tags from "@/app/components/Tags";
import Image from "next/image";
import React, { Suspense } from "react";
interface MeetupTypes {}
const Meetups: React.FC<MeetupTypes> = ({}) => {
  console.log();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" bg-dark-30 rounded-xl w-full p-2.5 flex-grow-0">
        <div className="flex gap-2 w-full">
          <div className="rounded-md overflow-hidden w-[85px] h-[85px] shrink-0">
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

          <section className="border w-full">
            <p className="lg:truncate-lines-1 truncate-lines-2 w-full">UIHUT - Crunchbase Company Profile & Funding</p>
            <p className=" text-xs text-secondary-30">
              UIHUT <span></span> <span>Sylhet, Bangladesh</span>
            </p>
          </section>
          <div className="rounded-md flex flex-col items-center h-[4.3rem] lg1:h-[3.5rem] px-2 shadow-md dark:shadow-dark-10 shrink-0 ml-2">
            <p className="">FEB</p>
            <p className="text-blue-80 font-extrabold text-2xl lg1:text-xl">7</p>
          </div>
        </div>
        {/* <p className="w-full h-11 mb-2 text-xs">
          Dribbble Meetups are a chance for designers to socialize, talk shop, and foster their local design communities. They are
          self-organized events that range from the casual, five-person, coffee-shop roundtable to the chef-catered, bar-tended, 200-person
          extravaganza...
        </p>
        <div className="w-full flex gap-3 lg1:gap-1.5 mt-5 lg1:mt-4 lg1:mb-1 overflow-x-auto scrollbar-none flex-wrap">
          <Tags
            label="Enterprenureship"
            classname="text-sm sm1:text-xss text-secondary-50 py-1.5 sm1:p-1 hover:underline cursor-pointer"
          />
          <Tags
            label="International"
            classname="text-sm sm1:text-xss text-secondary-50 py-1.5 hover:underline cursor-pointer"
          />
          <Tags
            label="Sustainability"
            classname="text-sm sm1:text-xss text-secondary-50 py-1.5 hover:underline cursor-pointer"
          />
        </div> */}
      </div>
    </Suspense>
  );
};

export default Meetups;
