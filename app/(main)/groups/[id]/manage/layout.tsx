import Avatar from "@/app/components/Avatar";
import Link from "next/link";
import MiniNavigation from "./MiniNavigation";

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  return (
    <div className="appScreen">
      <div className="w-full bg-dark-30 pb-2">
        {/* group link */}
        <div className="bg-transparent w-full m-auto max-w-[1600px] border-b border-secondary-30 flex gap-4 sm:p-4 p-2 ">
          <Avatar
            size={50}
            className="rounded-full flex-shrink-0 h-fit"
          />
          <Link href={`/groups/${params.id}`}>
            <p className="text-lg font-bold text-blue-default">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eos vero a, at facere iste dolorum, mollitia, delectus
              quidem praesentium laboriosam deleniti beatae rem magnam adipisci culpa ea molestias eum.
            </p>
          </Link>
        </div>
        {/* main navigation */}
        <div className="bg-transparent w-full m-auto max-w-[1600px] border-b border-secondary-30  sm:px-4 px-2 sm:pt-4 pt-2">
          <p className="mb-4 text-2xl">Manage group</p>
          <div className="flex gap-5">
            <div className="flex flex-col relative bottom-[-3px]">
              <p className=" text-base text-red-80 mx-2">Manage</p>
              <span className="mt-3 w-full h-1 bg-red-80 rounded-md"></span>
            </div>
            <div className="flex flex-col relative bottom-[-3px]">
              <p className=" text-base text-red-80 mx-2">Content</p>
              <span className="mt-3 w-full h-1 bg-red-80 rounded-md"></span>
            </div>
          </div>
        </div>
      </div>
      <main className="border gap-4 p-4">
        <div className="relative w-full flex flex-wrap">
          <MiniNavigation />
          <div className="bg-secondaryBg-20 dark:bg-dark-20 sticky top-[50px] sm1:mb-12 h-screen dark:bg-red-20">{children}</div>
        </div>
      </main>
    </div>
  );
}
