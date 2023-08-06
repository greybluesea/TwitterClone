import Avatar from "../Avatar";

type Props = {};

const TweetComposer = (props: Props) => {
  return (
    <section
      id="Tweet composer"
      className="border-b border-BORDER px-4 flex items-start pb-3 space-x-2
       h-full max-h-[140px]"
    >
      <div className="mt-2">
        <Avatar />
      </div>
      <form className="flex flex-col justify-between w-full h-full">
        <input
          type="text"
          name="tweet"
          className="w-full text-lg placeholder:text-BORDER bg-transparent py-3.5 px-2 outline-none border-none"
          placeholder="What's happening?"
          autoFocus
        />

        <div className="w-full flex justify-end items-center ">
          <button
            type="submit"
            className="sky-button-styling  px-3 pt-1.5 pb-2 w-full max-w-[90px] "
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
