import React from "react";
import Skeleton from "react-loading-skeleton";

const OneMeetup = () => {
  return (
    <div className=" bg-dark-30 rounded-xl w-full p-2.5 sm1:p-1.5 flex-grow-0 mb-3">
      <div className="flex gap-2 w-full sm1:flex-wrap">
        <div
          className="rounded-md overflow-hidden w-[100px] h-[100px] sm1:w-full sm1:h-[200px]
           shrink-0 object-cover">
          <Skeleton className="h-[105%] w-full" />
        </div>
        <span className="flex w-full gap-1">
          <section className="w-full">
            <Skeleton
              width={100}
              height={30}
              className="!w-full"
              containerClassName="!w-full block"
            />
            <p className=" text-xs text-secondary-30 md:text-sm">
              <Skeleton width={40} />
            </p>
            <div className="w-full flex gap-3 lg1:gap-1.5 mt-4 lg1:mt-3 lg1:mb-1 overflow-x-auto scrollbar-none flex-wrap">
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
          <div className="rounded-md flex flex-col items-center h-[4.3rem] lg1:h-[4rem] shadow-md dark:shadow-dark-10 shrink-0 ml-2">
            <Skeleton
              width={40}
              className="!h-[4.3rem]"
            />
            <p className="text-blue-80 font-extrabold text-2xl lg1:text-xl">
              <Skeleton />
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default OneMeetup;
