"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";
import Logo from "./logo";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "./language-switcher";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed w-full z-50 flex justify-center items-center p-4 md:p-6 md:px-10">
      <nav className="flex justify-between items-center w-full">
        <Logo />

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Button
            variant="link"
            asChild
            className="text-white hover:text-emerald-400 p-0 transition-colors duration-200"
          >
            <Link href="/login">{t("header.login")}</Link>
          </Button>
          <Button
            asChild
            className="bg-emerald-400 hover:bg-emerald-500 text-white max-w-36 transition-colors duration-300"
          >
            <Link href="/register" className="flex items-center gap-2">
              <span>{t("header.register")}</span> <ChevronRightIcon />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
