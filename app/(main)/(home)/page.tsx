import Image from "next/image";
import { New, New1 } from "../../components/Icons";
import HomeNav from "../../components/home/HomeNav";

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
       
      </div>

      <section className="h-screen bg-blue-dark-70 w-7/12"></section>
    </main>
  );
}
