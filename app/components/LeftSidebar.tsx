import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarkStarFill, BsTwitter, BsThreeDots } from "react-icons/bs";
import { FaEnvelope, FaMagnifyingGlass, FaUserLarge } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import { GoBellFill } from "react-icons/go";

const navItemsArray = [
  {
    title: "Home",
    icon: AiFillHome,
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
    <aside
      className="w-70 p-4 text-slate-300 flex flex-col justify-between text-xl border-r-1 border-slate-600"
      style={{ borderRightWidth: "1px" }}
    >
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

        <button
          className="w-full mx-2  bg-sky-600 p-4 rounded-full text-center hover:bg-opacity-70 transition duration-200"
          style={{ marginTop: "32px" }}
        >
          Tweet
        </button>
      </nav>
      <button className="w-full mx-2 mt-8 p-4 px-6 rounded-full hover-bg-light  cursor-pointer flex flex-row justify-between items-center">
        <div className="flex truncate space-x-2">
          <CgProfile className="w-10 h-10" />
          <div className="text-left text-sm max-w-20 truncate">
            <p className="flex font-semibold truncate">CurrentUser</p>
            <p className="flex truncate max-w-20">@CurrentUser</p>
          </div>
        </div>
        <BsThreeDots className="m-0" />
      </button>
    </aside>
  );
};

export default LeftSidebar;
