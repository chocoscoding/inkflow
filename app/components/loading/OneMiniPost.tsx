import React from "react";
import Skeleton from "react-loading-skeleton";

const OneLodingPost = () => {
  return (
    <li className="flex justify-between items-center mb-4 border-b border-secondary-20 pb-2 w-full">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="sm:w-[130px] sm:h-[130px] w-[65px] h-[65px] rounded-md overflow-hidden object-cover shrink-0 border border-secondary-20">
          <Skeleton className="h-[105%] w-full" />
        </div>

        <div className="flex flex-col justify-between w-full gap-1">
          <p className="xl:text-xl lg:text-lg text-sm truncate-lines-3 hover:underline cursor-pointer">
            <Skeleton
              width={100}
              height={30}
              className="!w-full"
              containerClassName="!w-full block"
            />
          </p>
          <section className="flex justify-between items-center lg1:flex-col lg1:items-start lg1:gap-1 flex-wrap gap-4 sm1:scale-90">
            {/* user */}
            <div className="flex  gap-1">
              <Skeleton
                width={40}
                height={40}
                containerClassName="ml-3"
                className="rounded-full"
              />
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-secondary-60">
                  <Skeleton
                    width={100}
                    height={10}
                    containerClassName=""
                  />
                </p>
                <p className="text-xss text-secondary-50">
                  <Skeleton
                    width={50}
                    height={10}
                    containerClassName=""
                  />
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* list and dropdown  */}
      <Skeleton
        width={40}
        height={40}
        containerClassName="ml-3"
        className="rounded-full"
      />
    </li>
  );
};

export default OneLodingPost;
