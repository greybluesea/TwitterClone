import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarkStarFill, BsTwitter, BsThreeDots } from "react-icons/bs";
import { FaEnvelope, FaMagnifyingGlass, FaUserLarge } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import { GoBellFill } from "react-icons/go";
import UserSection from "./UserSection";

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
    <nav
      className=" w-70 h-screen p-4 text-slate-300 flex flex-col justify-between text-xl border-r-1 border-slate-600"
      style={{ borderRightWidth: "1px" }}
    >
      <div
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
        <ul className="flex flex-col">
          {navItemsArray.map((item) => (
            <li key={item.title} id={item.title}>
              <Link
                href={`/${item.title.toLocaleLowerCase()}`}
                className="flex items-center hover-bg-light py-3 px-8 rounded-full "
              >
                <item.icon className="w-9 h-9" />
                <p className="pl-4">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="w-60 mx-2  bg-sky-600 p-4 rounded-full text-center hover:bg-opacity-70 transition duration-200"
          style={{ marginTop: "32px" }}
        >
          Tweet
        </button>
      </div>
      <UserSection />
    </nav>
  );
};

export default LeftSidebar;
