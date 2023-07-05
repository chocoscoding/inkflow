import Meetup from "@/app/components/home/Meetup";
import React from "react";

const Meetups = () => {
  return (
    <section className="flex p-4 sm:p-2 rounded-2xl flex-col justify-start items-start gap-4 dark:bg-dark-30">
      <p>Meetups</p>
      <Meetup />
      <Meetup />
      <Meetup />
      <Meetup />
    </section>
  );
};

export default Meetups;
