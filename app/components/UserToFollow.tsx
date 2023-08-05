import React from "react";
import Avatar from "./Avatar";

type Props = {};

const UserToFollow = (props: Props) => {
  return (
    <div
      id="user to follow"
      className="p-4 flex justify-between items-center hover-bg-lighter"
    >
      <div className="flex items-center space-x-2">
        <Avatar />
        <div className="flex flex-col">
          <p className="font-bold text-PRIMARY">Other User</p>
          <p className="text-SECONDARY text-sm">@otheruser1232</p>
        </div>
      </div>

      <button className="secondary-button">Follow</button>
    </div>
  );
};

export default UserToFollow;
