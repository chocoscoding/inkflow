"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
interface DropdownProps {
  keyName: string;
  triggerButton: ReactNode;
  elementLists: Array<{
    label: string;
    onClick: () => void;
  }>;
}
interface OneItemProps {
  label: string;
  onClick: () => void;
}
const OneItem: React.FC<OneItemProps> = ({ label, onClick }) => (
  <Menu.Item>
    {({ active }) => (
      <button
        onClick={onClick}
        className={`${
          active ? "dark:bg-dark-40 bg-zinc-100" : ""
        } group flex w-full items-center rounded-md px-2 py-3 text-sm text-gray-900 dark:text-white break-words`}>
        {label}
      </button>
    )}
  </Menu.Item>
);
const Dropdown: React.FC<DropdownProps> = ({ keyName, triggerButton, elementLists }) => {
  return (
    <Menu
      key={keyName}
      as="div"
      className="relative inline-block text-left">
      <div>
        <Menu.Button>{triggerButton}</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md dark:bg-dark-30 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden">
          <div className="px-1 py-1 ">
            {elementLists.map((e, i) => (
              <OneItem
                label={e.label}
                onClick={e.onClick}
                key={`OneItem-${i}`}
              />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
