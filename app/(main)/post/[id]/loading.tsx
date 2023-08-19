"use client";
import PostFuntions from "@/app/components/loading/PostFunctions";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  const CreatorInfo = () => (
    <section className="lg3a:w-10 w-full flex-shrink-0 min-w-[305px] h-fit lg3a:sticky lg3a:top-[55px]">
      <Skeleton
        height={300}
        className="rounded-lg"
      />
    </section>
  );
  return (
    <div className="appScreen flex py-2 px-4 max-w-[1600px] m-auto gap-3 flex-wrap">
      <PostFuntions extraClass="md1:hidden sticky top-[55px]" />
      <main className="flex-1">
        <section className="min-h-screen rounded-xl">
          <section>
            <div className="w-full overflow-hidden rounded-t-xl object-cover h-[300px]">
              <Skeleton className="w-full h-full" />
            </div>
            {/* post info */}
            <section className="md:p-4 p-2 w-full flex flex-col gap-1.5 bg-dark-30">
              <p className="text-xl font-semibold">
                <Skeleton className="h-[35px]" />
              </p>
              <p className="text-secondary-30">
                <Skeleton className="w-[30%]" />
              </p>
              <div className="w-full">
                <Skeleton className="h-[32px] w-[90%]" />
              </div>
              <div className="flex gap-3 flex-wrap w-full">
                {Array(4)
                  .fill(0)
                  .map((ele, i) => (
                    <Skeleton
                      key={`tags__${i}`}
                      width={60}
                      height={22}
                    />
                  ))}
              </div>
              <hr className="w-full bg-secondary-30 opacity-10 my-2" />
              {/* main post data */}
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

            <section className="bg-dark-30 md:p-4 p-2">
              <PostFuntions extraClass="hidden md1:block p-5 !bg-dark-20 mb-4 !w-full" />
            </section>
          </section>
        </section>
        <section className="mt-8 lg3a:hidden">
          <CreatorInfo />
        </section>
      </main>
      <span className="lg3:hidden">
        <CreatorInfo />
      </span>
    </div>
  );
};

export default Loading;
