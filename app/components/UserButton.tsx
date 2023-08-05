import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Avatar from "./Avatar";

type Props = {};

const UserButton = (props: Props) => {
  return (
    <>
      <button className="hidden w-[240px] lg:flex lg:flex-row justify-between items-center space-x-1  mt-4 py-2 px-6 rounded-full hover-bg-light  cursor-pointer  ">
        <div>
          <Avatar size={11} />
        </div>
        <div className="text-left w-full text-sm truncate">
          <p className=" font-semibold truncate">CurrentUser</p>
          <p className=" truncate ">@CurrentUserCurrentUser</p>
        </div>

        <BsThreeDots className="m-0 ml-2" />
      </button>
      <button className="flex lg:hidden rounded-full hover-opaque  cursor-pointer flex-row justify-between items-center">
        <Avatar />
      </button>
    </>
  );
};

export default UserButton;
