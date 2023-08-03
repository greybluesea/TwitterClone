import Image from "next/image";
import LeftSidebar from "./components/LeftSidebar";
import MiniLeftSidebar from "./components/MiniLeftSidebar";
import MobileNav from "./components/MobileNav";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center bg-slate-900 text-slate-200 ">
      <div className="w-full max-w-screen-lg h-full flex">
        <div className="sticky h-full bottom-0 top-0 left-0">
          <div className="hidden sm:flex lg:hidden">
            <MiniLeftSidebar />
          </div>
          <div className="hidden lg:block">
            <LeftSidebar />
          </div>
        </div>
        <main className="w-full h-full min-h-screen flex flex-col">
          <div className="h-full min-h-screen">`Main Timeline `</div>
          <div className="sticky bottom-0 flex sm:hidden">
            <MobileNav />
          </div>
        </main>
        <aside id="RightSidebar" className="w-70 hidden md:flex flex-col">
          RightSidebar
        </aside>
      </div>
    </div>
  );
}
