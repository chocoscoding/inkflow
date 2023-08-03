"use client";
import { More } from "@/app/components/Icons";
import Ripple from "@/app/components/Ripple";
import Image from "next/image";
import React from "react";
import { Menu } from "@headlessui/react";
import Dropdown from "@/app/components/Dropdown";
import Avatar from "@/app/components/Avatar";
interface OnePostProps {
  key: string;
}

const OnePost: React.FC<OnePostProps> = ({ key }) => {
  return (
    <li className="flex justify-between items-center mb-4 border-b border-secondary-20 pb-2">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="sm:w-[130px] sm:h-[130px] w-[65px] h-[65px] rounded-md overflow-hidden object-cover shrink-0">
          <Image
            src={`https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
            width={130}
            height={130}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>

        <div className="flex flex-col justify-between w-full gap-1">
          <p className="xl:text-xl lg:text-lg text-sm truncate-lines-3 hover:underline cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corrupti ullam ex iste voluptates esse perspiciatis nulla
            quisquam, beatae a mollitia dolorum? Eveniet dolores minus accusamus enim ullam, ab vel.
          </p>
          <section className="flex justify-between items-center lg1:flex-col lg1:items-start lg1:gap-1 flex-wrap gap-4 sm1:scale-90">
            {/* user */}
            <div className="flex  gap-1">
              <Avatar className="rounded-full" />
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-secondary-60">
                  Timileyinwandff <span className="inline-flex align-middle w-1 h-1 rounded-full bg-secondary-50"></span>
                </p>
                <p className="text-xss text-secondary-50">59 seconds ago</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* list and dropdown  */}
      <Dropdown
        key={`dropdown_Members_${key}`}
        keyName={`dropdown_Members_${key}`}
        triggerButton={
          <div className="w-10 h-10 sm1:w-8 sm1:h-8 rounded-full cursor-pointer lg:hover:bg-dark-30 flex-center ">
            <More className="sm1:scale-90" />
          </div>
        }
        elementLists={[{ label: "Delete Post", onClick: () => {} }]}
      />
    </li>
  );
};

export default OnePost;
