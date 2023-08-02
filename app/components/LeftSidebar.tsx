import Link from "next/link";
import React from "react";
import { BiSolidHomeCircle } from "react-icons/bi";
import { BsBookmarkStarFill, BsTwitter, BsThreeDots } from "react-icons/bs";
import { FaEnvelope, FaMagnifyingGlass, FaUserLarge } from "react-icons/fa6";

import { GoBellFill } from "react-icons/go";

const navItemsArray = [
  /* {
    title: "Twitter",
    icon: BsTwitter,
  }, */
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
    <nav
      id="LeftSidebar"
      className=" w-70 h-full flex flex-col items-start space-y-1  p-4 text-slate-300 "
    >
      <Link
        key={"Twitter"}
        href={"/"}
        className="hover:bg-slate-800 p-5 rounded-full ml-3 transition duration-200"
      >
        <BsTwitter className="w-12 h-12 text-sky-500" />
      </Link>
      {navItemsArray.map((item) => (
        <Link
          key={item.title}
          id={item.title}
          href={`/${item.title.toLocaleLowerCase()}`}
          className="flex items-center hover:bg-slate-800 py-3 px-8 rounded-full transition duration-200"
        >
          <item.icon className="w-10 h-10" />
          <p className="text-xl pl-4">{item.title}</p>
        </Link>
      ))}
      <div className="w-full">
        <button className="w-full mx-7 mt-8 bg-sky-600 p-4 rounded-full text-xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
    </nav>
  );
};

export default LeftSidebar;
