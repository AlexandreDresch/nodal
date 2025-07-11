"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import routes from "../routes";
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from "@/utils/navigation";
import React from "react";
import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { Footer } from "@/components/footer";

export default function Main({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  if (isWindowAvailable()) document.documentElement.dir = "ltr";

  return (
    <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" />
      <div className="h-full w-full font-dm dark:bg-navy-900">
        <main
          className={`mx-2.5  flex-none transition-all dark:bg-navy-900 
              md:pr-2 xl:ml-[250px]`}
        >
          <div>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
