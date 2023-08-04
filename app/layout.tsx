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
          className="w-full max-w-screen-lg h-full flex justify-center"
        >
          <div id="leftColumn" className="sticky h-full bottom-0 top-0 left-0">
            <div className="hidden sm:flex lg:hidden">
              <MiniLeftSidebar />
            </div>
            <div className="hidden lg:block">
              <LeftSidebar />
            </div>
          </div>
          <main
            id="centerColumn"
            className="w-full max-w-[520px] lg:max-w-[580px] flex flex-col border-x border-slate-600"
          >
            <div className="flex w-full h-full min-h-screen">{children}</div>
            <div className="sticky bottom-0 flex sm:hidden">
              <MobileNav />
            </div>
          </main>
          <aside id="RightSidebar" className="w-70 hidden md:flex flex-col">
            RightSidebar
          </aside>
        </div>
      </body>
    </html>
  );
}
