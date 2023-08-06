import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Avatar from "./Avatar";

type Props = {};

const UserButton = (props: Props) => {
  return (
    <>
      <button className="hidden w-[240px] lg:flex lg:flex-row justify-between items-center space-x-1 p-4 rounded-full hover-bg-light">
        <div>
          <Avatar size={12} />
        </div>
        <div className="text-md truncate">
          <p className="font-semibold leading-5 truncate">
            CurrentUser CurrentUser
          </p>
          <p className="leading-5 before:content-['@'] truncate ">
            CurrentUserCurrentUser
          </p>
        </div>

        <BsThreeDots className="w-6 h-6 " />
      </button>
      <button className=" lg:hidden hover-text-light">
        <Avatar />
      </button>
    </>
  );
};

export default UserButton;
