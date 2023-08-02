import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex justify-center bg-slate-900 text-slate-100 ">
      <div className="w-full max-w-screen-lg h-full flex">
        <aside id="leftSidebar" className=" w-70 flex flex-col">
          leftSidebar
        </aside>
        <main className="w-full flex flex-col h-full">Main Timeline</main>
        <aside id="rightSidebar" className=" w-70 flex flex-col">
          rightSidebar
        </aside>
      </div>
    </div>
  );
}
