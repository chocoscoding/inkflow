import Image from 'next/image';
import React from 'react'
import Ripple from '../Ripple';
import { More } from '../Icons';

const ListGroup = () => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div className="flex flex-1 mr-3 sm:mr-4 gap-2 sm:gap-4">
        <div className="w-[70px] sm:w-[60px] h-[70px] sm:h-[60px]  rounded overflow-hidden object-cover shrink-0">
          <Image
            src={`https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
            width={100}
            height={100}
            alt="group-img"
            className="h-full w-auto"
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="sm:font-semibold text-base lg:text-lg md:truncate-lines-2 truncate-lines-4">
            The association of software developers who know how beautiful life is post Open AI era life is post Open AI era
          </p>
          <p className="text-sm text-gray-400">12,345 members</p>
        </div>
      </div>
      <Ripple>
        <div className="w-10 h-10 rounded-full cursor-pointer md:hover:bg-dark-30 flex-center">
          <More className="" />
        </div>
      </Ripple>
    </li>
  )
}

export default ListGroup