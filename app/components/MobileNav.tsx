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

const MobileNav = (props: Props) => {
  return (
    <nav className="w-full max-w-screen mx-0 px-2 text-slate-400 flex flex-row justify-between text-xl border-t border-slate-600 overflow-hidden ">
      <div
        id="MobileNav"
        className="w-full flex flex-row justify-evenly items-center py-2"
      >
        {/*  <Link
          key={"Twitter"}
          href={"/"}
          className="hover-bg-light p-2 rounded-full"
        >
          <BsTwitter className="w-8 h-8 text-sky-500" />
        </Link> */}

        {navItemsArray.map((item) => (
          <Link
            key={item.title}
            id={item.title}
            href={`/${item.title.toLocaleLowerCase()}`}
            className="hover-bg-light rounded-full"
          >
            <item.icon className="w-7 h-7" />
          </Link>
        ))}

        <button className="w-fit text-slate-400 rounded-full text-center hover-opaque">
          <MdOutlinePostAdd className="w-11 h-11 " />
        </button>
        <div className=" my-auto ">
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
