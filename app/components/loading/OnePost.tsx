import React from "react";
import Skeleton from "react-loading-skeleton";

const OneLodingPost = () => {
  return (
    <div className="bg-dark-30 lg:h-56 h-fit w-full mb-4 rounded-xl flex p-4 md1:p-2 sm1:p-3 md:gap-4 gap-2 sm1:overflow-hidden sm1:flex-col">
      <div className="rounded-lg overflow-hidden xl:w-[200px] md:w-[150px] sm:w-[130px] sm1:w-full sm1:h-60 w-1/5 shrink-0">
        <Skeleton className="h-[105%] w-full" />
      </div>
      <div className="flex flex-col justify-between w-full">
        {/* top */}
        <section className="w-full">
          <div className="flex w-full h-fit justify-between items-center">
            <p>
              <Skeleton
                width={100}
                height={30}
                className="!w-full"
                containerClassName="!w-full block"
              />
            </p>
            <Skeleton
              width={40}
              height={40}
              containerClassName="ml-3"
              className="rounded-full"
            />
          </div>
          {/* tags */}
          <div className="w-full flex gap-3 lg1:gap-1.5 mt-5 lg1:mt-4 lg1:mb-1 overflow-x-auto scrollbar-none flex-wrap">
            {Array(3)
              .fill(0)
              .map((ele, i) => (
                <Skeleton
                  key={`tags__${i}`}
                  width={60}
                  height={22}
                />
              ))}
          </div>
        </section>
        {/* user and post info */}
        <section className="flex justify-between items-center lg1:flex-col lg1:items-start lg1:gap-2 flex-wrap gap-4">
          {/* user */}
          <div className="sm:flex hidden gap-1">
            <Skeleton
              width={40}
              height={40}
              containerClassName=""
              className="rounded-full"
            />
            <div className="flex flex-col justify-between ">
              <Skeleton
                width={90}
                height={12}
              />
              <Skeleton
                width={60}
                height={10}
              />
            </div>
          </div>
          {/* post info */}
          <div className="flex text-xs md1:text-xss gap-4 text-secondary-50 sm1:mt-3 sm1:text-xss">
            {Array(3)
              .fill(0)
              .map((ele, i) => (
                <Skeleton
                  key={`tags__${i}`}
                  width={60}
                  height={22}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OneLodingPost;
