import React from "react";

const Trending = () => {
  return (
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
  );
};

export default Trending;
