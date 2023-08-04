import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarkStarFill, BsTwitter, BsThreeDots } from "react-icons/bs";
import { FaEnvelope, FaMagnifyingGlass, FaUserLarge } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import { GoBellFill } from "react-icons/go";
import UserSection from "./UserButton";
import { navItemsArray } from "./LeftSidebar";
import UserButton from "./UserButton";
import { MdOutlinePostAdd } from "react-icons/md";

type Props = {};

const MiniLeftSidebar = (props: Props) => {
  return (
    <nav
      className={
        "w-70 h-screen mx-0 p-3 pb-6 px-2 text-slate-400  flex flex-col justify-between text-xl " /*  + " border-r border-slate-600" */
      }
    >
      <div
        id="MiniLeftSidebar"
        className="w-full flex flex-col items-center space-y-1 overflow-hidden"
      >
        <Link
          key={"Twitter"}
          href={"/"}
          className="hover-bg-light p-3 rounded-full"
        >
          <BsTwitter className="w-10 h-10 text-sky-500" />
        </Link>
        <ul className="flex flex-col items-center">
          {navItemsArray.map((item) => (
            <li key={item.title} id={item.title}>
              <Link
                href={`/${item.title.toLocaleLowerCase()}`}
                className="flex items-center hover-bg-light p-4 rounded-full mx-auto"
              >
                <item.icon className="w-8 h-8" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-3"></div>
        <button className="w-fit  bg-sky-700 p-2 text-slate-400 rounded-full text-center hover-opaque">
          <MdOutlinePostAdd className="w-9 h-9 " />
        </button>
      </div>
      <UserButton />
    </nav>
  );
};

export default MiniLeftSidebar;
