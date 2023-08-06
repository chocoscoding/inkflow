import React from 'react'
import Avatar from "@/app/components/Avatar";

const CreatorInfo = () => {
  return (
<section className="w-10 flex-shrink-0 min-w-[305px] h-fit sticky top-[55px]">
        <div className="flex flex-col items-center bg-dark-30 rounded-xl">
          <Avatar
            size={80}
            className="rounded-full my-4"
          />
          <p className=" text-xl mb-1">Mansure Armani</p>
          <p className=" text-base font-light text-secondary-30">Web Developer</p>

          <button className="bg-blue-default p-2 w-10/12 rounded-lg my-3">Follow</button>
        </div>
        <div className="mt-4 bg-dark-30 rounded-xl p-3">
          <p className="border-b border-secondary-30 pb-3">More posts from Mansure</p>
          <div className="border-b border-secondary-30 py-3 last:border-0">
            <p className="text-sm truncate-lines-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In commodi repellendus fugit nesciunt. Beatae magnam tenetur nisi
              nostrum perspiciatis maxime nam voluptate maiores ducimus assumenda exercitationem, blanditiis quis, molestiae illum?
            </p>
            <p className="text-sm truncate-lines-1 text-secondary-30">#webdev #ekdn #ddsls #dsds</p>
          </div>
          <div className="border-b border-secondary-30 py-3 last:border-0">
            <p className="text-sm truncate-lines-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In commodi repellendus fugit nesciunt. Beatae magnam tenetur nisi
              nostrum perspiciatis maxime nam voluptate maiores ducimus assumenda exercitationem, blanditiis quis, molestiae illum?
            </p>
            <p className="text-sm truncate-lines-1 text-secondary-30">#webdev #ekdn #ddsls #dsds</p>
          </div>
          <div className="border-b border-secondary-30 py-3 last:border-0">
            <p className="text-sm truncate-lines-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In commodi repellendus fugit nesciunt. Beatae magnam tenetur nisi
              nostrum perspiciatis maxime nam voluptate maiores ducimus assumenda exercitationem, blanditiis quis, molestiae illum?
            </p>
            <p className="text-sm truncate-lines-1 text-secondary-30">#webdev #ekdn #ddsls #dsds</p>
          </div>
        </div>
      </section>  )
}

export default CreatorInfo