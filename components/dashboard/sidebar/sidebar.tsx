import { XIcon } from "lucide-react";
import { SidebarLinks } from "./components/links";

import { IRoute } from "@/app/types/navigation";
import Logo from "@/components/logo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Sidebar(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96 xl:translate-x-0"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={() => setOpen(false)}
      >
        <XIcon />
      </span>

      <div className={`mx-[56px] mt-[30px] flex items-center`}>
        <Logo />
      </div>
      <div className="mb-7 h-px bg-gray-300 dark:bg-white/30" />

      <ul className="mb-auto pt-1">
        <SidebarLinks routes={routes} />
      </ul>
    </div>
  );
}
