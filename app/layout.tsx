import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LeftSidebar from "./components/LeftSidebar";
import MiniLeftSidebar from "./components/MiniLeftSidebar";
import MobileNav from "./components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TwitterClone",
  description: "Supabase/PostgreSQL + Drizzle, learned from Soni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "w-full h-full min-h-screen flex justify-center bg-slate-900 text-slate-300"
        }
      >
        <div
          id="mainframe"
          className="w-full max-w-screen-xl h-full flex justify-center"
        >
          <aside
            id="leftColumn"
            className="sticky h-full bottom-0 top-0  border-r border-slate-600"
          >
            <div className="hidden sm:flex lg:hidden ">
              <MiniLeftSidebar />
            </div>
            <div className="hidden lg:block">
              <LeftSidebar />
            </div>
          </aside>
          <main
            id="centerColumn"
            className="w-full h-full min-h-screen max-w-[520px] lg:max-w-[580px] flex flex-col "
          >
            <div className="flex w-full h-full pb-20 ">{children}</div>
            <div className="fixed bottom-0 left-0 right-0 sm:hidden">
              <MobileNav />
            </div>
          </main>
          <aside
            id="rightColumn"
            className="w-70 sticky h-full min-h-screen bottom-0 top-0 hidden md:flex flex-col border-l border-slate-600"
          >
            RightSidebar
          </aside>
        </div>
      </body>
    </html>
  );
}
