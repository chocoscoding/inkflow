import Image from "next/image";
import { New, New1 } from "../../components/Icons";
import HomeNav from "../../components/home/HomeNav";
import Meetup from "@/app/components/home/Meetups";

export default function Home() {
  return (
    <main className="flex w-full p-6 max-w-[1600px] m-auto border border-red-20 gap-4">
      <div className="sticky top-[60px] w-2/12 lg:min-w-[230px] border border-red-40 h-fit flex flex-col gap-2">
        <section className="flex p-4 rounded-2xl flex-col justify-start items-start gap-3 dark:bg-dark-30">
          <HomeNav
            Name="New"
            mainText="Newest and Recent"
            secondaryText="Find the latest updates"
            active={true}
          />
          <HomeNav
            Name="Popular"
            mainText="Popular of the day"
            secondaryText="The best of today"
            active={false}
          />
          <HomeNav
            Name="Follow"
            mainText="Following"
            secondaryText="Explore from your favourite person"
            active={false}
          />
        </section>
        <section className="flex p-4 rounded-2xl flex-col justify-start items-start gap-3 dark:bg-dark-30">
          <p>Trending Tags</p>
          <ul className="flex flex-col gap-2">
            <li className="text-xl text-secondary-30 cursor-pointer">#business</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#blogging</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#life</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#tech</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#finance</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#blogging</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#life</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#tech</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#finance</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#tech</li>
            <li className="text-xl text-secondary-30 cursor-pointer">#finance</li>
          </ul>
        </section>
      </div>

      <section className="min-h-screen w-7/12">
        {Array(30)
          .fill("")
          .map((i) => (
            <div
              className="bg-blue-dark-70 h-40 w-full mb-4 rounded-md"
              key={`posts${i}`}></div>
          ))}
      </section>
      <section className="sticky top-[60px] lg:min-w-[230px] h-fit flex flex-col gap-2 w-3/12">
        <section className="flex p-4 rounded-2xl flex-col justify-start items-start gap-4 dark:bg-dark-30">
          <p>Meetups</p>
          <Meetup />
          <Meetup />
          <Meetup />
          <Meetup />
        </section>
      </section>
    </main>
  );
}
