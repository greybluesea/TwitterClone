import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

type Props = {};

const UserSection = (props: Props) => {
  return (
    <button className="w-60 mx-2 mt-8 p-4 px-6 rounded-full hover-bg-light  cursor-pointer flex flex-row justify-between items-center">
      <div className="flex truncate space-x-1">
        <CgProfile className="w-11 h-11 overflow-visible" />
        <div className="text-left text-sm max-w-20 truncate">
          <p className="flex font-semibold truncate">CurrentUser</p>
          <p className="flex truncate max-w-20">@CurrentUserCurrentUser</p>
        </div>
      </div>
      <BsThreeDots className="m-0 ml-2" />
    </button>
  );
};

export default UserSection;
