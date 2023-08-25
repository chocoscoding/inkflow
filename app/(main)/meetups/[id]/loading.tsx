import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <main className="appScreen pt-2">
      <div className="max-w-[950px] m-auto bg-dark-30 rounded-xl w-full p-2 min-h-[90vh]">
        <section className="flex gap-3">
          <div className="w-[10%] md1:w-[70px] h-fit aspect-square rounded-md overflow-hidden object-cover shrink-0">
            <Skeleton className="h-full w-[150%] shrink-0" />
          </div>
          <div className="w-full">
            <p className="text-xl font-semibold w-full">
              <Skeleton className="h-[30px] w-full" />
            </p>
            <div className="w-full flex gap-3 lg1:gap-1.5 lg1:mb-1 overflow-x-auto scrollbar-none flex-wrap">
              {Array(3)
                .fill(0)
                .map((ele, i) => (
                  <Skeleton
                    key={`tags__${i}`}
                    className="rounded-full"
                    width={60}
                    height={22}
                  />
                ))}
            </div>
          </div>
        </section>
        <hr className="my-3 border-secondary-30" />
        <section className="main">
          <div className="w-full">
            <Skeleton className="h-[32px] w-[90%]" />
          </div>
          <div className="w-full">
            <Skeleton className="h-[32px] w-[90%]" />
          </div>

          <div className="text-secondary-30 mb-4">
            <Skeleton
              count={3}
              className="mb-3 w-full"
            />
            <Skeleton
              count={2}
              className="mb-3 w-[80%]"
            />
            <Skeleton
              count={1}
              className="mb-3 w-[65%]"
            />
            <Skeleton
              count={2}
              className="mb-3 w-full"
            />
            <Skeleton
              count={1}
              className="mb-3 w-[80%]"
            />
            <Skeleton
              count={1}
              className="mb-3 w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Loading;
