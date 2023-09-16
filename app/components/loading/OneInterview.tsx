import React from "react";
import Skeleton from "react-loading-skeleton";

const OneInterview = () => {
  const VerticalLine = () => {
    return <div className="h-full w-[1.5px] mx-4 bg-secondary-50 last:hidden opacity-30"></div>;
  };
  return (
    <div className=" bg-dark-30 rounded-xl w-full p-2.5 sm1:p-1.5 flex-grow-0 mb-3 flex ba1:flex-wrap-reverse gap-3">
      <div className="rounded-md overflow-hidden ba1:w-full w-[32%] md:w-[34%]  min-w-[200px] h-52 flex-grow-0 shrink-0 object-cover md2:h-60 md2:mb-4">
        <Skeleton className="h-[105%] w-full" />
      </div>
      <span className="hidden ba1:block order-1 mt-1">
        <Skeleton
          width={40}
          height={40}
          containerClassName="ml-3"
          className="rounded-full"
        />
      </span>
      <div className="flex flex-col gap-2 w-full">
        {/* userinfo */}
        <span className="block ba1:hidden">
          <Skeleton
            width={40}
            height={40}
            containerClassName="ml-3"
            className="rounded-full"
          />
        </span>

        <p className="truncate-lines-2 w-full md:text-lg md:font-semibold mb-3">
          <Skeleton containerClassName="!w-[100%]" />
        </p>

        <section className="flex w-full justify-between flex-wrap gap-1">
          <section className="flex gap-1">
            <div className="">
              <p className="text-base md:font-semibold">
                <Skeleton width={30} />
              </p>
              <p className="text-xs text-secondary-30 md:text-sm">
                <Skeleton width={30} />
              </p>
            </div>
            <VerticalLine />
            <div className="">
              <p className="text-base md:font-semibold">
                <Skeleton width={30} />
              </p>
              <p className="text-xs text-secondary-30 md:text-sm">
                <Skeleton width={30} />
              </p>
            </div>
            <VerticalLine />
            <div className="">
              <p className="text-base md:font-semibold">
                <Skeleton width={30} />
              </p>
              <p className="text-xs text-secondary-30 md:text-sm">
                <Skeleton width={30} />
              </p>
            </div>
            <VerticalLine />
          </section>

          <Skeleton
            width={150}
            height={40}
          />
        </section>
      </div>
    </div>
  );
};

export default OneInterview;
