import Link from "next/link";
import React from "react";
import { BiSolidHomeCircle } from "react-icons/bi";
import { BsBookmarkStarFill, BsTwitter, BsThreeDots } from "react-icons/bs";
import { FaEnvelope, FaMagnifyingGlass, FaUserLarge } from "react-icons/fa6";

import { GoBellFill } from "react-icons/go";

const navItemsArray = [
  {
    title: "Home",
    icon: BiSolidHomeCircle,
  },
  {
    title: "Explore",
    icon: FaMagnifyingGlass,
  },
  {
    title: "Notifications",
    icon: GoBellFill,
  },
  {
    title: "Messages",
    icon: FaEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmarkStarFill,
  },
  {
    title: "Profile",
    icon: FaUserLarge,
  },
];

const LeftSidebar = () => {
  return (
    <aside className="w-70 p-4 text-slate-300 flex flex-col justify-between text-xl">
      <nav
        id="LeftSidebar"
        className="w-full flex flex-col items-start space-y-1 "
      >
        <Link
          key={"Twitter"}
          href={"/"}
          className="hover-bg-light p-5 rounded-full ml-2"
        >
          <BsTwitter className="w-12 h-12 text-sky-500" />
        </Link>
        {navItemsArray.map((item) => (
          <Link
            key={item.title}
            id={item.title}
            href={`/${item.title.toLocaleLowerCase()}`}
            className="flex items-center hover-bg-light py-3 px-8 rounded-full "
          >
            <item.icon className="w-9 h-9" />
            <p className="pl-4">{item.title}</p>
          </Link>
        ))}
        <div className="w-full">
          <button className="w-full mx-7 mt-8 bg-sky-600 p-4 rounded-full text-center hover:bg-opacity-70 transition duration-200">
            Tweet
          </button>
        </div>
      </nav>
      <button className="w-full mx-7 mt-8 p-5 px-6 rounded-full text-center hover-bg-light flex justify-between items-center">
        {"CurrentUser"} <BsThreeDots />
      </button>
    </aside>
  );
};

export default LeftSidebar;
