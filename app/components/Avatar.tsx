import React from "react";
import { CgProfile } from "react-icons/cg";

type Props = {
  size?: number;
};

const Avatar = ({ size = 10 }: Props) => {
  return <CgProfile className={`w-${size}  h-${size}  text-slate-400`} />;
};

export default Avatar;
