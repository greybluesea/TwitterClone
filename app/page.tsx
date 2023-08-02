import Image from "next/image";
import LeftSidebar from "./components/LeftSidebar";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center bg-slate-900 text-slate-200 ">
      <div className="fixed top-0 bottom-0 w-full max-w-screen-lg h-full flex">
        <LeftSidebar />
        <main className="w-full flex flex-col h-full">Main Timeline</main>
        <aside id="RightSidebar" className=" w-70 flex flex-col">
          RightSidebar
        </aside>
      </div>
    </div>
  );
}
