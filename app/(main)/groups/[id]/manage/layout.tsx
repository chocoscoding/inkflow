"use client";
import Avatar from "@/app/components/Avatar";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="appScreen">
      <div className=" h-52 w-full border bg-dark-30">
        <div className="bg-transparent w-full h-14 m-auto max-w-[1600px] border-y border-secondary-30 flex">
          <Avatar
            size={50}
            className="rounded-full flex-shrink-0"
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eos vero a, at facere iste dolorum, mollitia, delectus
            quidem praesentium laboriosam deleniti beatae rem magnam adipisci culpa ea molestias eum.
          </p>
        </div>
      </div>
      <div className="bg-secondaryBg-20 dark:bg-dark-20 sticky top-[50px] sm1:mb-12 ">{children}</div>
    </div>
  );
}
