import React from "react";
import { CgProfile } from "react-icons/cg";

type Props = {};

const TweetComposer = (props: Props) => {
  return (
    <section
      id="Tweet composer"
      className="border-y px-4 flex items-start pb-3 space-x-2
       border-slate-600 h-full max-h-[140px]"
    >
      <CgProfile className="w-10 h-10 text-slate-400 mt-2" />
      <form className="flex flex-col justify-between w-full h-full">
        <input
          type="text"
          name="tweet"
          className="w-full text-lg placeholder:text-slate-600 bg-transparent py-4 px-2 outline-none border-none"
          placeholder="What's happening?"
        />

        <div className="w-full flex justify-end items-center ">
          <button
            type="submit"
            className="sky-button-styling px-3 pt-1.5 pb-2 w-full max-w-[90px] "
          >
            Tweet
          </button>
          <button className="invisible" type="reset" />
        </div>
      </form>
    </section>
  );
};

export default TweetComposer;
